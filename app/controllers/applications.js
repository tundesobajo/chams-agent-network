exports.index = (req, res) => {
  const context = { 
    title: 'Partnership Application',
    pageClass: 'page'
  };
  res.render('applications/index', context);
};

exports.start = (req, res) => {
  const context = { 
    title: 'Start Application',
    pageClass: 'page'
  };
  res.render('applications/start', context);
};

exports.areaCheck = (req, res) => {
  const context = { 
    title: 'Coverage Area Availability Check',
    pageClass: 'page'
  };
  res.render('applications/area_check', context);
};