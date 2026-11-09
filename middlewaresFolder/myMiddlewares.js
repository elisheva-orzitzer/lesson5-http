export const addDate = (req, res, next) => {
  req.currentDate = new Date();
  next();
};

export const printDate = (req, res, next) => {
  console.log(req.currentDate);
  next();
};

export function blockDays(req, res, next) {
  const now = req.currentDate;

  if (
    (now.getDay() == 5 && now.getHours() > 12) ||
    (now.getDay() == 6 && now.getHour() < 10)
  ) {
    res.status(400).json({ error: "האתר חסום היום, נסה ביום אחר..." });
  } else {
    next();
  }
}
