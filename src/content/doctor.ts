export type ClinicIcon = "building1" | "building2" | "hospital";

export type Clinic = {
  icon: ClinicIcon;
  name: string;
  tag: string;
  address: string;
  schedule: string;
  note: string | null;
};

const name = "Dr. Jomel G. Lapides";
const credentials = "MD, DPBO";
const siteName = "Lapides Eye Care";

export const doctor = {
  siteName,
  name,
  credentials,
  nameWithCredentials: `${name}, ${credentials}`,
  siteTitle: `${siteName} | ${name}, ${credentials}`,
  heroNameLines: ["Jomel G. Lapides,", "MD, DPBO"],
  jobTitle: "Board-Certified Ophthalmologist",
  specialty: "Comprehensive Ophthalmology | Laser & Cataract Surgery",
  credentialsList: [
    "Board-Certified Ophthalmologist (MD, DPBO)",
    "Specialist in Comprehensive Eye Care",
    "Expert in Cataract & Laser Surgery",
    "HMO Network Provider (Maxicare)",
  ],
  contact: {
    email: "jglapides0225@gmail.com",
    phone: "0963 080 3269",
  },
  hoursSummary: [
    "Tuesday: Maxicare Clinics",
    "Thursday: PERC (by appointment)",
    "Friday: Maxicare Clinics",
    "Saturday: Maxicare Clinics",
    "Sunday: SM MOA (3-7 PM)",
  ],
  officeHours: [
    "Tuesday: Cubao & Metroeast Clinics",
    "Thursday: PERC (by appointment)",
    "Friday: Hemady & VV Soliven Clinics",
    "Saturday: Otis & VV Soliven Clinics",
    "Sunday: SM MOA (3-7 PM)",
  ],
  clinics: [
    {
      icon: "building1",
      name: "Premiere Eye Referral Center (PERC)",
      tag: "Specialty Clinic",
      address: "YKM Bldg., UN Avenue cor. Alhambra St., Ermita, Manila",
      schedule: "Thursday (by appointment only)",
      note: null,
    },
    {
      icon: "building2",
      name: "Ideal Vision Center, SM MOA",
      tag: "Vision Center",
      address: "3rd Floor, SM Mall of Asia, Pasay City",
      schedule: "Sunday, 3-7 PM",
      note: null,
    },
    {
      icon: "hospital",
      name: "Maxicare Primary Care Clinics",
      tag: "HMO Clinic",
      address: "Multiple Locations (Cubao, Metroeast, Hemady, VV Soliven, Otis)",
      schedule:
        "Tuesday (Cubao & Metroeast), Friday (Hemady & VV Soliven), Saturday (Otis & VV Soliven)",
      note: "Maxicare HMO cardholders only",
    },
  ] satisfies Clinic[],
};
