export default {
  ui: {
    request: {
      baseUrl: "",
      timeout: 60 * 1000,
    },
    noAuthLogOff: true,
    timeZone: {
      defaultOffsetId: "32",
      defaultOffset: "+00:00",
    },
    hideFeature: {
      sideBar: {
        dashboard: false,
        log: true,
        policy: true,
        report: true,
        quarantine: true,
        administrator: true,
      },
      dashboard: {
        widgetCategory: false,
        exportPDFReport: false,
        exportVirtualAnalyzerABlockList: true,
      },
      header: {
        accountSwitch: true,
        accountSetting: {
          logOff: true,
        },
      },
    },
  },
};
