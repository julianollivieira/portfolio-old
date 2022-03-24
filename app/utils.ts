interface DaysMonthsYears {
  days: number;
  months: number;
  years: number;
}

const getDaysMonthsYearsSinceBirthdate = (
  dt1: Date,
  dt2: Date
): DaysMonthsYears => {
  const dt1Date = dt1.getDate();
  const dt1Month = dt1.getMonth();
  const dt1Year = dt1.getFullYear();

  // Get the number of full days, months and years
  let days = dt2.getDate() - dt1Date;
  let months = dt2.getMonth() - dt1Month;
  let years = dt2.getFullYear() - dt1Year;

  // If the difference in days is less than 0, then we are in the previous month
  if (days < 0) {
    const tmpDate = new Date(dt1Year, dt1Month + 1, 1, 0, 0, -1);
    months -= 1;
    days += tmpDate.getDate();
  }

  // If the difference in months is less than 0, then we are in the previous year
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return {
    days,
    months,
    years,
  };
};

export { getDaysMonthsYearsSinceBirthdate };
