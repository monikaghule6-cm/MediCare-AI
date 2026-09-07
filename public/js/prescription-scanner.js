// Prescription scanner stub
// This file is a placeholder for integrating Tesseract/OCR in the browser
export async function scanImage(file){
  // Placeholder: return a fake result
  return {
    text: 'Prescription text will appear here',
    medicines: []
  }
}

// If used directly in browser without bundler, attach to window
if(typeof window !== 'undefined'){
  window.scanImageStub = scanImage
}
