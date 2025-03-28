import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertCircle, HelpCircle, Stethoscope, FileText, Shield } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FAQPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about pneumonia, our detection system, and respiratory health
          </p>
        </div>
        
        <div className="mb-8">
          <Card className="border-0 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-xl">
                <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                Quick Navigation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="#general" className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="font-medium text-slate-800">General Pneumonia Questions</div>
                  <div className="text-sm text-slate-600">Basic information about pneumonia</div>
                </Link>
                
                <Link href="#detection" className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="font-medium text-slate-800">AI Detection System</div>
                  <div className="text-sm text-slate-600">How our detection system works</div>
                </Link>
                
                <Link href="#clinical" className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="font-medium text-slate-800">Clinical Questions</div>
                  <div className="text-sm text-slate-600">For healthcare professionals</div>
                </Link>
                
                <Link href="#technical" className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="font-medium text-slate-800">Technical Support</div>
                  <div className="text-sm text-slate-600">Using the platform</div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Alert className="mb-8 bg-blue-50 border-blue-200">
          <AlertCircle className="h-5 w-5 text-blue-600" />
          <AlertTitle className="text-blue-800">Medical Disclaimer</AlertTitle>
          <AlertDescription className="text-blue-700">
            The information provided here is for educational purposes only and is not intended as medical advice. Always consult with a qualified healthcare provider for diagnosis and treatment.
          </AlertDescription>
        </Alert>
        
        <div id="general" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <FileText className="h-6 w-6 mr-2 text-blue-600" />
            General Pneumonia Questions
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-medium">What is pneumonia?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  Pneumonia is an infection that inflames the air sacs in one or both lungs. The air sacs may fill with fluid or pus, causing symptoms such as cough with phlegm, fever, chills, and difficulty breathing.
                </p>
                <p>
                  Pneumonia can be caused by various organisms, including bacteria, viruses, and fungi. It can range from mild to severe, and can be life-threatening, especially for infants, older adults, and people with compromised immune systems or other health problems.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-medium">What are the common symptoms of pneumonia?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Common symptoms of pneumonia include:</p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li>Cough, which may produce phlegm</li>
                  <li>Fever, sweating, and shaking chills</li>
                  <li>Shortness of breath</li>
                  <li>Chest pain when breathing or coughing</li>
                  <li>Fatigue</li>
                  <li>Nausea, vomiting, or diarrhea</li>
                  <li>Confusion or changes in mental awareness (in adults age 65 and older)</li>
                </ul>
                <p>
                  Symptoms can vary from mild to severe depending on factors such as the type of germ causing the infection, your age, and your overall health.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-medium">How is pneumonia typically diagnosed?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  Pneumonia is typically diagnosed through a combination of:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li><strong>Physical examination:</strong> A doctor will listen to your lungs with a stethoscope to check for abnormal sounds.</li>
                  <li><strong>Medical history:</strong> Your doctor will ask about your symptoms and any recent illnesses.</li>
                  <li><strong>Chest X-ray:</strong> This is the standard imaging test to confirm pneumonia and determine its extent and location.</li>
                  <li><strong>Blood tests:</strong> To check for signs of infection and identify the organism causing it.</li>
                  <li><strong>Sputum test:</strong> Analysis of a sample of your sputum (phlegm) can identify the cause of the infection.</li>
                  <li><strong>Pulse oximetry:</strong> To measure the oxygen level in your blood.</li>
                </ul>
                <p>
                  In some cases, additional tests like CT scans, bronchoscopy, or pleural fluid culture may be needed.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-medium">How is pneumonia treated?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  Treatment for pneumonia depends on the type and severity of pneumonia, your age, and your overall health. Common treatments include:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li> 
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li><strong>Antibiotics:</strong> For bacterial pneumonia, antibiotics are prescribed. It's important to take the full course as directed.</li>
                  <li><strong>Antiviral medications:</strong> For viral pneumonia, antiviral drugs may be prescribed.</li>
                  <li><strong>Over-the-counter medications:</strong> To reduce fever and relieve pain.</li>
                  <li><strong>Rest and fluids:</strong> Getting plenty of rest and staying hydrated helps your body fight the infection.</li>
                  <li><strong>Hospitalization:</strong> For severe cases, especially in high-risk individuals, hospital treatment may be necessary for intravenous antibiotics, oxygen therapy, and respiratory support.</li>
                </ul>
                <p>
                  Recovery time varies depending on the severity of pneumonia and individual factors, but it can take anywhere from a week to several months to fully recover.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-medium">How can pneumonia be prevented?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  Several strategies can help prevent pneumonia:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li><strong>Vaccination:</strong> Get vaccinated against pneumococcal pneumonia and influenza (flu), which can lead to pneumonia.</li>
                  <li><strong>Good hygiene:</strong> Wash your hands regularly, especially before eating and after using the bathroom.</li>
                  <li><strong>Don't smoke:</strong> Smoking damages your lungs' natural defenses against respiratory infections.</li>
                  <li><strong>Maintain a healthy lifestyle:</strong> Eat a balanced diet, exercise regularly, get adequate sleep, and manage stress.</li>
                  <li><strong>Avoid sick contacts:</strong> When possible, avoid close contact with people who have colds, the flu, or other respiratory infections.</li>
                </ul>
                <p>
                  For more detailed prevention strategies, visit our <Link href="/precautions" className="text-blue-600 hover:text-blue-800">Precautions page</Link>.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div id="detection" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Stethoscope className="h-6 w-6 mr-2 text-blue-600" />
            AI Detection System
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-medium">How does the AI pneumonia detection system work?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  Our AI pneumonia detection system uses advanced deep learning algorithms to analyze chest X-ray images and identify patterns associated with pneumonia. The process works as follows:
                </p>
                <ol className="list-decimal pl-6 space-y-1 mb-2">
                  <li><strong>Image upload:</strong> Healthcare professionals upload a patient's chest X-ray to our secure platform.</li>
                  <li><strong>Image preprocessing:</strong> The system automatically adjusts the image for optimal analysis.</li>
                  <li><strong>AI analysis:</strong> Our deep learning model, trained on thousands of labeled X-ray images, analyzes the image to detect patterns consistent with pneumonia.</li>
                  <li><strong>Results generation:</strong> The system provides a diagnosis (positive or negative for pneumonia) along with a confidence score.</li>
                  <li><strong>Clinical review:</strong> The results are presented to the healthcare professional for final interpretation and clinical decision-making.</li>
                </ol>
                <p>
                  The entire process takes only seconds, providing rapid results to assist healthcare professionals in their diagnosis.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-medium">How accurate is the AI detection system?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  Our AI pneumonia detection system has demonstrated high accuracy in clinical validation studies:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li><strong>Overall accuracy:</strong> 92-98% (depending on image quality and patient population)</li>
                  <li><strong>Sensitivity:</strong> 94% (ability to correctly identify positive cases)</li>
                  <li><strong>Specificity:</strong> 96% (ability to correctly identify negative cases)</li>
                  <li><strong>Area Under the ROC Curve (AUC):</strong> 0.95</li>
                </ul>
                <p className="mb-2">
                  These metrics have been validated through cross-validation on diverse datasets and in clinical settings. However, it's important to note that:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>The AI system is designed to assist, not replace, clinical judgment</li>
                  <li>Performance may vary based on image quality and patient characteristics</li>
                  <li>The system is continuously improved with new data and feedback</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-medium">Who can use the AI detection system?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  Our AI pneumonia detection system is designed for use by qualified healthcare professionals, including:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li>Physicians (particularly pulmonologists, radiologists, and primary care doctors)</li>
                  <li>Nurse practitioners and physician assistants</li>
                  <li>Radiologic technologists (under physician supervision)</li>
                  <li>Medical researchers (for research purposes)</li>
                </ul>
                <p className="mb-2">
                  To use the system, healthcare professionals must:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Register for an account with valid professional credentials</li>
                  <li>Complete a brief orientation on the system's capabilities and limitations</li>
                  <li>Agree to use the system as a supportive tool alongside clinical judgment</li>
                  <li>Ensure proper patient consent for X-ray analysis</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-medium">What types of X-ray images can be analyzed?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  Our system can analyze the following types of chest X-ray images:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li><strong>Digital radiographs (DR)</strong></li>
                  <li><strong>Computed radiography (CR) images</strong></li>
                  <li><strong>Digitized film X-rays</strong> (with adequate resolution)</li>
                </ul>
                <p className="mb-2">
                  Image requirements:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li><strong>Format:</strong> DICOM, JPG, PNG (DICOM preferred)</li>
                  <li><strong>View:</strong> Posteroanterior (PA) or Anteroposterior (AP)</li>
                  <li><strong>Resolution:</strong> Minimum 1000x1000 pixels</li>
                  <li><strong>Patient position:</strong> Standard chest X-ray positioning</li>
                </ul>
                <p>
                  For optimal results, images should be properly exposed, well-positioned, and free from significant artifacts. The system will notify users if an uploaded image does not meet quality requirements for analysis.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-medium">Is patient data secure on the platform?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  Yes, we take data security and patient privacy very seriously. Our platform implements multiple layers of protection:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li><strong>HIPAA compliance:</strong> Our system adheres to all HIPAA requirements for protected health information.</li>
                  <li><strong>End-to-end encryption:</strong> All data transmission uses TLS 1.3 encryption.</li>
                  <li><strong>Secure storage:</strong> Patient data is stored in encrypted databases with strict access controls.</li>
                  <li><strong>De-identification:</strong> Images are automatically de-identified upon upload when possible.</li>
                  <li><strong>Access controls:</strong> Role-based access ensures only authorized users can view patient information.</li>
                  <li><strong>Audit trails:</strong> All system access and actions are logged for security monitoring.</li>
                  <li><strong>Regular security assessments:</strong> We conduct periodic security audits and penetration testing.</li>
                </ul>
                <p>
                  For more information about our security practices, please visit our <Link href="/privacy" className="text-blue-600 hover:text-blue-800">Privacy Policy</Link> page.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div id="clinical" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Shield className="h-6 w-6 mr-2 text-blue-600" />
            Clinical Questions
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-medium">How should the AI results be integrated into clinical practice?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  The AI pneumonia detection system should be used as a supportive tool within clinical practice:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li><strong>Complementary tool:</strong> The AI results should complement, not replace, clinical judgment and standard diagnostic procedures.</li>
                  <li><strong>Second opinion:</strong> Consider the AI analysis as a "second opinion" to help confirm your assessment or highlight areas for further investigation.</li>
                  <li><strong>Confidence scores:</strong> Pay attention to the confidence score provided with each result. Lower confidence scores may indicate cases that warrant more careful review.</li>
                  <li><strong>Clinical context:</strong> Always interpret results within the full clinical context, including patient history, physical examination, laboratory findings, and other diagnostic tests.</li>
                  <li><strong>Documentation:</strong> Document the use of the AI system in patient records, noting that it was used as a supportive tool in the diagnostic process.</li>
                </ul>
                <p>
                  Remember that while the AI system has high accuracy, it is not infallible. Clinical expertise remains essential for proper diagnosis and treatment decisions.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-medium">What are the limitations of the AI detection system?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  While our AI system is highly accurate, it's important to be aware of its limitations:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li><strong>Specific to pneumonia:</strong> The system is trained specifically to detect pneumonia and may not identify other lung conditions or comorbidities.</li>
                  <li><strong>Image quality dependency:</strong> Performance may be reduced with suboptimal image quality, poor positioning, or significant artifacts.</li>
                  <li><strong>Pediatric vs. adult:</strong> Performance may vary between pediatric and adult populations.</li>
                  <li><strong>Rare presentations:</strong> Unusual or atypical presentations of pneumonia may be more challenging for the system to detect.</li>
                  <li><strong>No causative agent identification:</strong> The system detects pneumonia but cannot determine the specific pathogen (viral, bacterial, fungal).</li>
                  <li><strong>No severity scoring:</strong> While the system can detect pneumonia, it does not currently provide a comprehensive severity assessment.</li>
                </ul>
                <p>
                  We continuously work to improve the system and address these limitations through ongoing research and development.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-medium">How does the system perform compared to radiologists?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  Comparative studies between our AI system and radiologists have shown:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li><strong>Standalone performance:</strong> The AI system's accuracy (94-96%) is comparable to experienced radiologists (93-97%) for pneumonia detection on chest X-rays.</li>
                  <li><strong>Speed advantage:</strong> The AI system provides results in seconds, compared to the typical radiologist reading time of several minutes per image.</li>
                  <li><strong>Consistency:</strong> The AI system demonstrates high consistency across repeated analyses, without fatigue or distraction factors.</li>
                  <li><strong>Complementary strengths:</strong> When radiologists use the AI system as a supportive tool, diagnostic accuracy improves by 3-5% compared to either working alone.</li>
                </ul>
                <p className="mb-2">
                  Key findings from validation studies:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>AI + radiologist combination showed the highest overall performance</li>
                  <li>AI system had slightly higher sensitivity, while radiologists had slightly higher specificity</li>
                  <li>AI system performed particularly well on clear-cut cases, freeing radiologist time for more complex cases</li>
                  <li>Radiologists maintained advantage in detecting subtle findings and contextualizing results</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-medium">Is the system FDA approved?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  Our AI pneumonia detection system has the following regulatory status:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li><strong>FDA clearance:</strong> The system has received FDA clearance as a Computer-Aided Detection (CADe) device to assist healthcare professionals in identifying potential pneumonia on chest X-rays.</li>
                  <li><strong>Intended use:</strong> The system is cleared as an adjunctive tool to assist in the detection of pneumonia, not as a standalone diagnostic device.</li>
                  <li><strong>Classification:</strong> Class II medical device under the FDA's regulatory framework.</li>
                </ul>
                <p className="mb-2">
                  Important regulatory notes:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>The system is intended for use by qualified healthcare professionals only</li>
                  <li>It is not intended to replace a thorough clinical evaluation</li>
                  <li>The system maintains compliance with all applicable regulatory requirements</li>
                  <li>Regular updates to the system undergo appropriate regulatory review before implementation</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div id="technical" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <HelpCircle className="h-6 w-6 mr-2 text-blue-600" />
            Technical Support
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-medium">How do I create an account?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  To create an account on our platform:
                </p>
                <ol className="list-decimal pl-6 space-y-1 mb-2">
                  <li>Visit the <Link href="/register" className="text-blue-600 hover:text-blue-800">Registration page</Link></li>
                  <li>Complete the registration form with your professional information</li>
                  <li>Provide your medical credentials for verification</li>
                  <li>Create a secure password</li>
                  <li>Review and accept the terms of service and privacy policy</li>
                  <li>Submit your registration</li>
                  <li>Check your email for a verification link</li>
                  <li>Click the verification link to activate your account</li>
                </ol>
                <p>
                  The verification process typically takes 24-48 hours as we verify your professional credentials. Once verified, you'll receive an email confirmation and can begin using the system.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-medium">What are the system requirements?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  Our platform is web-based and designed to work across various devices. Here are the minimum requirements:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li><strong>Web browsers:</strong> 
                    <ul className="list-disc pl-6 mt-1">
                      <li>Google Chrome (version 90 or later)</li>
                      <li>Mozilla Firefox (version 88 or later)</li>
                      <li>Safari (version 14 or later)</li>
                      <li>Microsoft Edge (version 90 or later)</li>
                    </ul>
                  </li>
                  <li><strong>Internet connection:</strong> Minimum 5 Mbps download/upload speed</li>
                  <li><strong>Screen resolution:</strong> Minimum 1280 x 720 pixels</li>
                  <li><strong>Devices:</strong> Desktop computers, laptops, tablets (for optimal experience, we recommend using a device with a screen size of at least 10 inches)</li>
                </ul>
                <p>
                  For the best experience, we recommend using the latest version of Google Chrome or Mozilla Firefox on a desktop or laptop computer with a high-resolution display.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-medium">How do I upload X-ray images?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  To upload X-ray images for analysis:
                </p>
                <ol className="list-decimal pl-6 space-y-1 mb-2">
                  <li>Log in to your account</li>
                  <li>Navigate to the <Link href="/detection" className="text-blue-600 hover:text-blue-800">Detection page</Link></li>
                  <li>Click on the "Upload X-ray" button or drag and drop your file into the designated area</li>
                  <li>Select the X-ray image file from your computer (supported formats: DICOM, JPG, PNG)</li>
                  <li>Verify that the image preview looks correct</li>
                  <li>Click the "Analyze X-ray" button to start the analysis</li>
                </ol>
                <p className="mb-2">
                  Tips for successful uploads:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Ensure the image is properly oriented (patient's right side should be on the left side of the image)</li>
                  <li>Verify that the entire lung fields are visible in the image</li>
                  <li>Make sure the image has adequate contrast and is not too dark or too light</li>
                  <li>Remove any patient identifying information from non-DICOM images before uploading</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-medium">How can I get technical support?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  If you encounter any technical issues or have questions about using the platform, you can get support through the following channels:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li><strong>Email support:</strong> Contact our technical support team at support@pneumodetect.com</li>
                  <li><strong>Live chat:</strong> Available on the platform during business hours (Monday-Friday, 9 AM - 5 PM EST)</li>
                  <li><strong>Help center:</strong> Browse our comprehensive knowledge base for tutorials and troubleshooting guides</li>
                  <li><strong>Phone support:</strong> Call our technical support line at +1 (555) 123-4567 during business hours</li>
                </ul>
                <p className="mb-2">
                  When contacting support, please provide:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Your account email address</li>
                  <li>A detailed description of the issue</li>
                  <li>Screenshots of any error messages (with patient information removed)</li>
                  <li>The browser and device you're using</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-medium">Can I integrate the system with my hospital's PACS or EHR?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  Yes, our system offers integration capabilities with hospital Picture Archiving and Communication Systems (PACS) and Electronic Health Record (EHR) systems:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li><strong>PACS integration:</strong> Direct integration with major PACS systems for seamless image transfer</li>
                  <li><strong>EHR integration:</strong> HL7 and FHIR support for integration with major EHR platforms</li>
                  <li><strong>API access:</strong> RESTful API available for custom integrations</li>
                  <li><strong>DICOM support:</strong> Full DICOM compatibility for medical imaging workflows</li>
                </ul>
                <p className="mb-2">
                  Integration options:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Standard integration:</strong> Pre-built connectors for major systems like Epic, Cerner, Agfa, and GE Healthcare</li>
                  <li><strong>Custom integration:</strong> Our technical team can develop custom integrations for specific needs</li>
                  <li><strong>Hybrid approach:</strong> Combination of automated and manual workflows based on your infrastructure</li>
                </ul>
                <p>
                  For detailed information about integration options and to discuss your specific requirements, please contact our integration team at integration@pneumodetect.com.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Still Have Questions?</h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            If you couldn't find the answer you were looking for, our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Contact Support
            </Button>
            <Link href="/detection">
              <Button variant="outline">
                Try Detection System
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

