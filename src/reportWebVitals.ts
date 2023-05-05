import { type ReportHandler } from 'web-vitals'

const reportWebVitals: any = (onPerfEntry?: ReportHandler) => {
  if ((onPerfEntry != null)) {
    void import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    })
  }
}

export default reportWebVitals
