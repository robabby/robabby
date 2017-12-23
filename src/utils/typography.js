import Typography from 'typography'
// import GitHub from 'typography-theme-github'
import Lawton from 'typography-theme-lawton'

const typography = new Typography(Lawton)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
