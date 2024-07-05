
export const fetchFeatureFlags = async () => {
    // Simulate an API call to fetch feature flags
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          showHeader: true,
          showAlert: false,
          showBadge: true,
          showSpinner: false,
          showProgress: true,
          showAccordian: true,
        });
      }, 1000);
    });
  };
  