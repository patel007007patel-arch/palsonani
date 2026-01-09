// Utility function to save form data to JSON (stored in localStorage)
// Data is stored locally and can be exported as JSON file by developers

export interface FormData {
  email: string;
  message: string;
  timestamp: string;
}

const STORAGE_KEY = 'portfolio_form_submissions';

/**
 * Saves form data to localStorage and appends to existing submissions
 * Developers can access this data by calling exportFormDataToJSON()
 */
export function saveFormDataToJSON(formData: { email: string; message: string }): void {
  const data: FormData = {
    email: formData.email,
    message: formData.message,
    timestamp: new Date().toISOString(),
  };

  // Get existing submissions from localStorage
  const existingData = getStoredSubmissions();
  
  // Append new submission
  existingData.push(data);
  
  // Save back to localStorage
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existingData, null, 2));
    console.log('Form data saved to localStorage');
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    // Fallback: download as JSON file if localStorage fails
    downloadJSONFile(data);
  }
}

/**
 * Gets all stored form submissions from localStorage
 */
export function getStoredSubmissions(): FormData[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error reading from localStorage:', error);
  }
  return [];
}

/**
 * Exports all form submissions to a JSON file
 * This function can be called by developers to download all submissions
 * Usage: Call exportFormDataToJSON() in browser console or create a hidden admin button
 */
export function exportFormDataToJSON(): void {
  const submissions = getStoredSubmissions();
  
  if (submissions.length === 0) {
    console.log('No form submissions found');
    return;
  }

  const jsonString = JSON.stringify(submissions, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `form-submissions-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  
  console.log(`Exported ${submissions.length} form submission(s) to JSON file`);
}

/**
 * Clears all stored form submissions
 * Use with caution!
 */
export function clearStoredSubmissions(): void {
  localStorage.removeItem(STORAGE_KEY);
  console.log('All form submissions cleared');
}

/**
 * Downloads a single form submission as JSON file (fallback method)
 */
function downloadJSONFile(data: FormData): void {
  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `form-submission-${Date.now()}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Make export function available globally for developer access
if (typeof window !== 'undefined') {
  (window as any).exportFormData = exportFormDataToJSON;
  (window as any).getFormSubmissions = getStoredSubmissions;
  (window as any).clearFormSubmissions = clearStoredSubmissions;
  
  console.log('Form data utilities available:');
  console.log('- window.exportFormData() - Export all submissions to JSON file');
  console.log('- window.getFormSubmissions() - Get all submissions as array');
  console.log('- window.clearFormSubmissions() - Clear all stored submissions');
}
