# Previous-employer logos

The homepage uses the companies' actual wordmarks in the existing supporting-text color. The SVGs render on the server, inherit `currentColor`, and keep accessible company names. Each mark has its own optical size; do not stretch them to equal widths or heights.

Artwork is contained in `app/components/ExperienceLogos.tsx`. No logo request goes to a third-party host. The existing “Previously building web products at” label describes the relationship.

## Sources

Sources retrieved on 2026-09-17:

- **PartySlate:** the inline `ps-logo-icon` SVG in the [official homepage](https://www.partyslate.com/) header. Original viewBox: `0 0 589.6 54.3`. Preserve the outlined lettering; remove website-specific classes and attributes.
- **project44:** the [official header SVG](https://www.project44.com/wp-content/uploads/2024/01/logo.svg), served from the [company's CDN](https://cdn-iladlmn.nitrocdn.com/qcimIvFNvroAeWBmCEUImqHGnxBfwdwN/assets/images/source/rev-cccb26b/www.project44.com/wp-content/uploads/2024/01/logo.svg). Original viewBox: `0 0 213 73`. Use the complete wordmark and circular 44 symbol; replace the blue fill with `currentColor`.
- **SAVO:** the monochrome wordmark in the footer of SAVO's [Sales Content Pro sell sheet](https://images.template.net/wp-content/uploads/2016/03/16064334/Sales-Content-Pro-Sell-Sheet-PDF-Free-Download.pdf), page 1. Extract the four original vector paths with Poppler and tighten the viewBox around the wordmark, excluding the adjacent slogan. Replace white with `currentColor`. The mark was cross-checked against SAVO's [2017 company press release](https://www.prnewswire.co.uk/news-releases/miller-heiman-selects-savo-group-for-sales-enablement-technology-663654613.html).

These logos identify Rob's previous employers. They remain the respective owners' trademarks. SAVO's old domain now hosts an unrelated business and is not a source for this artwork.
