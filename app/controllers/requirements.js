
exports.index = (req, res) => {
  const context = { 
    title: 'Requirements and Checklists',
    pageClass: 'page'
  };
  res.render('requirements/index', context);
};

exports.group1 = (req, res) => {
  const context = { 
    title: 'Qualification and Required Documents Checklist',
    pageClass: 'page'
  };
  res.render('requirements/group1', context);
};

exports.group2 = (req, res) => {
  const context = { 
    title: 'Location Staff/Field Agent Requirements',
    pageClass: 'page'
  };
  res.render('requirements/group2', context);
};

exports.group3 = (req, res) => {
  const context = { 
    title: 'Partner Qualification and Setup Cost',
    pageClass: 'page'
  };
  res.render('requirements/group3', context);
};

exports.group4 = (req, res) => {
  const context = { 
    title: 'Quick Setup Equipment Specification',
    pageClass: 'page'
  };
  res.render('requirements/group4', context);
};

exports.group5 = (req, res) => {
  const context = { 
    title: 'Location Setup Qualification',
    pageClass: 'page'
  };
  res.render('requirements/group5', context);
};

exports.group6 = (req, res) => {
  const context = { 
    title: 'Mobile Vehicle Equipment Setup Specification',
    pageClass: 'page'
  };
  res.render('requirements/group6', context);
};
