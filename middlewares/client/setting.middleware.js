const Setting = require("../../models/setting.model");

module.exports.settingGeneral = async (req, res, next) => {
  const setting = await Setting.findOne({});
  res.locals.setting = setting;
  next();
};
