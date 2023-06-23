interface Scholar {
  firstName: string;
  lastName: string;
  cohortNumber: number;
}

function introduceScholar(scholar: Scholar): string {
  const {firstName, lastName, cohortNumber} = scholar;
  return `${firstName} ${lastName} is an Academy scholar, on cohort ${cohortNumber}`
}

export default introduceScholar;
