export interface CandidateFormData {
  fullName: string;
  email: string;
  phone: string;
  positionApplied: string;
  location: string;
  currentCTC: string;
  expectedCTC: string;
}

export interface FormErrors {
  [key: string]: string;
}

export interface SubmissionResponse {
  success?: boolean;
  message: string;
  applicationId?: string;
  missingFields?: string[];
}