"use client";

import { useEffect, useRef, useState } from "react";
import { useThemeMode } from "../components/useThemeMode";
import styles from "./contact.module.css";

type MapInstance = {
  isScrollEnabled: boolean; isZoomEnabled: boolean; showsZoomControl: boolean;
  colorScheme: string; addAnnotation(annotation: unknown): void; destroy(): void;
};
type MapKit = {
  addEventListener(type: string, listener: () => void): void;
  removeEventListener(type: string, listener: () => void): void;
  init(options: { authorizationCallback: (done: (token: string) => void) => void; language: string }): void;
  Map: { new(element: HTMLElement, options: Record<string, unknown>): MapInstance; MapTypes: { MutedStandard: string } };
  Coordinate: new(latitude: number, longitude: number) => unknown;
  CoordinateSpan: new(latitude: number, longitude: number) => unknown;
  CoordinateRegion: new(center: unknown, span: unknown) => unknown;
  MarkerAnnotation: new(coordinate: unknown, options: Record<string, unknown>) => unknown;
  FeatureVisibility: { Hidden: string };
};
declare global { interface Window { mapkit?: MapKit; robabbyMapReady?: () => void } }
let library: Promise<MapKit> | undefined;
function loadMapKit() {
  if (!library) library = new Promise<MapKit>((resolve, reject) => {
    if (window.mapkit) { resolve(window.mapkit); return; }
    window.robabbyMapReady = () => {
      if (window.mapkit) resolve(window.mapkit);
      else reject(new Error("Map unavailable"));
    };
    const script = document.createElement("script");
    script.src = "https://cdn.apple-mapkit.com/mk/6/mapkit.core.js";
    script.async = true;
    script.dataset.callback = "robabbyMapReady";
    script.dataset.libraries = "map,annotations";
    script.onerror = () => reject(new Error("Map unavailable"));
    document.head.appendChild(script);
  });
  return library;
}

export default function RegionMap() {
  const element = useRef<HTMLDivElement>(null);
  const map = useRef<MapInstance | null>(null);
  const theme = useThemeMode();
  const latestTheme = useRef(theme);
  const [status, setStatus] = useState("Loading the Bellingham area…");
  const [ready, setReady] = useState(false);
  const [exploring, setExploring] = useState(false);
  useEffect(() => {
    latestTheme.current = theme;
    if (map.current) map.current.colorScheme = theme;
  }, [theme]);
  useEffect(() => {
    let disposed = false;
    const abort = new AbortController();
    let kitInstance: MapKit | undefined;
    const fail = () => { if (!disposed) { setStatus("The map is unavailable. Bellingham is in northwest Washington, near the Canadian border."); setReady(false); } };
    async function token() {
      const response = await fetch("/api/maps/token", { signal: abort.signal });
      if (!response.ok) throw new Error("Map unavailable");
      return response.text();
    }
    async function start() {
      try {
        // Check configuration before downloading the map library.
        let firstToken: string | undefined = await token();
        const kit = await loadMapKit();
        if (disposed || !element.current) return;
        kitInstance = kit;
        kit.addEventListener("error", fail);
        kit.init({ language: "en-US", authorizationCallback: done => {
          if (firstToken) { done(firstToken); firstToken = undefined; }
          else void token().then(done).catch(fail);
        } });
        const instance = new kit.Map(element.current, {
          mapType: kit.Map.MapTypes.MutedStandard,
          region: new kit.CoordinateRegion(new kit.Coordinate(48.65, -123.15), new kit.CoordinateSpan(2.2, 3.1)),
          colorScheme: latestTheme.current,
          showsCompass: kit.FeatureVisibility.Hidden, showsZoomControl: false,
          isScrollEnabled: false, isZoomEnabled: false, isRotationEnabled: false,
          showsUserLocationControl: false,
        });
        instance.addAnnotation(new kit.MarkerAnnotation(new kit.Coordinate(48.7519, -122.4787), {
          title: "Bellingham", subtitle: "Based here. Working locally and remotely.", color: "#2945ba", glyphText: "R",
        }));
        map.current = instance;
        setReady(true); setStatus("");
      } catch { fail(); }
    }
    void start();
    return () => { disposed = true; abort.abort(); kitInstance?.removeEventListener("error", fail); map.current?.destroy(); map.current = null; };
  }, []);
  function toggle() {
    if (!map.current) return;
    const next = !exploring;
    map.current.isScrollEnabled = next;
    map.current.isZoomEnabled = next;
    map.current.showsZoomControl = next;
    setExploring(next);
  }
  return <>
    <div className={styles.mapFrame}>
      <div ref={element} className={styles.map} role="region" aria-label="Map of Bellingham and the Salish Sea region" />
      {status && <p className={styles.mapStatus} role="status">{status}</p>}
      <noscript><p className={`${styles.mapStatus} ${styles.noJsMap}`}>Bellingham is in northwest Washington, near the Canadian border.</p></noscript>
    </div>
    <div className={`wrap ${styles.mapControls}`}>
      <a href="https://maps.apple.com/?ll=48.7519,-122.4787&q=Bellingham" target="_blank" rel="noopener noreferrer">View Bellingham in Apple Maps<span className="sr-only"> (opens in a new tab)</span></a>
      <button type="button" disabled={!ready} aria-pressed={exploring} onClick={toggle}>{exploring ? "Done exploring" : "Explore the map"}</button>
    </div>
  </>;
}
