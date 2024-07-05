// src/feature-flag/index.jsx
import React, { useEffect, useState } from 'react';
import { fetchFeatureFlags } from './data';
import Header from '../Components/Header';
import Alert from '../Components/Alert';
import Modal from '../Components/Modal';
import Spinner from '../Components/Spinner';
import Headings from '../Components/Headings';
import Accordian from '../Components/Accordian';

const Index = () => {
  const [featureFlags, setFeatureFlags] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFeatureFlags = async () => {
      const flags = await fetchFeatureFlags();
      setFeatureFlags(flags);
      setLoading(false);
    };

    getFeatureFlags();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {featureFlags.showHeader && <Header />}
      {featureFlags.showAlert && <Alert />}
      {featureFlags.showBadge && <Modal />}
      {featureFlags.showSpinner && <Spinner />}
      {featureFlags.showProgress && <Headings />}
      {featureFlags.showAccordian && <Accordian />}
    </div>
  );
};

export default Index;
