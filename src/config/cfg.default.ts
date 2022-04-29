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
    widgetCategoryShowConfig: {
      atp_srs: true,
      atp_va: true,
      dp: true,
      risky: true,
      ransomware: true,
      summary: true,
      bec: true,
      total_detections: true,
    },
    hideFeature: {
      sideBar: {
        dashboard: false,
        log: false,
        policy: false,
        report: false,
        quarantine: false,
        administrator: false,
      },
      dashboard: {
        widgetCategory: false,
        exportPDFReport: false,
        exportVirtualAnalyzerABlockList: false,
      },
      header: {
        accountSwitch: true,
        accountSetting: {
          logOff: true,
        },
      },
    },
    pendoApiKey: "c6143613-39c2-4a58-6f8f-50da2ef57a1a",
  },
  bff: {
    apiPreFix: "/bff",
  },
};
