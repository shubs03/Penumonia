import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, TreesIcon as Lungs, Stethoscope, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">About Pneumonia</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Understanding pneumonia, its causes, symptoms, and treatment options to better inform healthcare decisions
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
            <TabsTrigger value="causes">Causes</TabsTrigger>
            <TabsTrigger value="treatment">Treatment</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="pt-6">
            <div className="prose max-w-none text-slate-700">
              <p className="lead text-lg mb-4">
                Pneumonia is an infection that inflames the air sacs in one or both lungs. The air sacs may fill with
                fluid or pus, causing cough with phlegm or pus, fever, chills, and difficulty breathing.
              </p>

              <p>
                Pneumonia can range in seriousness from mild to life-threatening. It is most serious for infants and
                young children, people older than age 65, and people with health problems or weakened immune systems.
              </p>

              <div className="my-6">
                <img
                  src="/placeholder.svg?height=400&width=800"
                  alt="Pneumonia in lungs illustration"
                  className="rounded-lg w-full h-auto"
                />
                <p className="text-sm text-slate-500 mt-2 text-center">
                  Illustration showing healthy lungs vs. lungs affected by pneumonia
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Types of Pneumonia</h3>
              <p>Pneumonia can be classified based on where it was acquired:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Community-acquired pneumonia:</strong> Occurs outside of hospitals or healthcare facilities
                </li>
                <li>
                  <strong>Hospital-acquired pneumonia:</strong> Develops during a hospital stay, typically 48 hours or
                  more after admission
                </li>
                <li>
                  <strong>Healthcare-associated pneumonia:</strong> Develops in people who receive care in outpatient
                  clinics, including dialysis centers
                </li>
                <li>
                  <strong>Aspiration pneumonia:</strong> Occurs when food, drink, vomit or saliva is inhaled into the
                  lungs
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="symptoms" className="pt-6">
            <div className="prose max-w-none text-slate-700">
              <p className="lead text-lg mb-4">
                The signs and symptoms of pneumonia vary from mild to severe, depending on factors such as the type of
                germ causing the infection, your age and overall health.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                      Common Symptoms
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Chest pain when breathing or coughing</li>
                      <li>Confusion or changes in mental awareness (in adults age 65 and older)</li>
                      <li>Cough, which may produce phlegm</li>
                      <li>Fatigue</li>
                      <li>Fever, sweating and shaking chills</li>
                      <li>
                        Lower than normal body temperature (in adults older than age 65 and people with weak immune
                        systems)
                      </li>
                      <li>Nausea, vomiting or diarrhea</li>
                      <li>Shortness of breath</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg">
                      <Users className="h-5 w-5 text-blue-500 mr-2" />
                      Symptoms by Age Group
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium mb-1">Newborns and infants:</h4>
                    <ul className="list-disc pl-6 space-y-1 mb-3">
                      <li>May have no symptoms or may vomit</li>
                      <li>May have a fever and cough</li>
                      <li>May appear restless or tired and without energy</li>
                      <li>May have difficulty breathing and eating</li>
                    </ul>

                    <h4 className="font-medium mb-1">Older children:</h4>
                    <ul className="list-disc pl-6 space-y-1 mb-3">
                      <li>Fever, which may be lower or absent in older adults</li>
                      <li>Cough, often producing mucus</li>
                      <li>Chest pain</li>
                      <li>Shortness of breath</li>
                    </ul>

                    <h4 className="font-medium mb-1">Adults older than 65:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Lower than normal temperature</li>
                      <li>Confusion or changes in mental awareness</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
                <h3 className="text-amber-800 font-semibold flex items-center mb-2">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  When to See a Doctor
                </h3>
                <p className="text-amber-700">
                  See your doctor if you have difficulty breathing, chest pain, persistent fever of 102°F (39°C) or
                  higher, or persistent cough, especially if you're coughing up pus.
                </p>
                <p className="text-amber-700 mt-2">
                  It's especially important that people in high-risk groups see a doctor:
                </p>
                <ul className="list-disc pl-6 text-amber-700 mt-1">
                  <li>Adults older than age 65</li>
                  <li>Children younger than age 2 with signs and symptoms</li>
                  <li>People with an underlying health condition or weakened immune system</li>
                  <li>People receiving chemotherapy or taking medications that suppress the immune system</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="causes" className="pt-6">
            <div className="prose max-w-none text-slate-700">
              <p className="lead text-lg mb-4">
                Many germs can cause pneumonia. The most common are bacteria and viruses in the air we breathe.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg">
                      <Lungs className="h-5 w-5 text-blue-500 mr-2" />
                      Bacterial Pneumonia
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">
                      The most common cause of bacterial pneumonia is Streptococcus pneumoniae. This type of pneumonia
                      can occur on its own or after you've had a cold or the flu.
                    </p>
                    <p>Other bacteria that can cause pneumonia include:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Legionella pneumophila (Legionnaires' disease)</li>
                      <li>Mycoplasma pneumoniae</li>
                      <li>Chlamydia pneumoniae</li>
                      <li>Haemophilus influenzae</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg">
                      <Lungs className="h-5 w-5 text-red-500 mr-2" />
                      Viral Pneumonia
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">Some of the viruses that can cause pneumonia include:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Influenza (flu) viruses</li>
                      <li>Respiratory syncytial virus (RSV)</li>
                      <li>SARS-CoV-2 (COVID-19)</li>
                      <li>Rhinoviruses (common cold)</li>
                      <li>Adenoviruses</li>
                    </ul>
                    <p className="mt-3">
                      Viral pneumonia is usually mild and goes away on its own within a few weeks. However, viral
                      pneumonia caused by influenza or COVID-19 can be severe.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Risk Factors</h3>
              <p>Pneumonia can affect anyone. But the following groups are at higher risk:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Children younger than 2 years of age:</strong> Their immune systems are still developing
                </li>
                <li>
                  <strong>Adults 65 years or older:</strong> Weakened immune systems and potential underlying health
                  conditions
                </li>
                <li>
                  <strong>People with weakened immune systems:</strong> Due to disease or medications
                </li>
                <li>
                  <strong>People with chronic diseases:</strong> Such as asthma, chronic obstructive pulmonary disease
                  (COPD), heart disease, or diabetes
                </li>
                <li>
                  <strong>Smokers:</strong> Damage to natural defenses in lungs
                </li>
                <li>
                  <strong>People on ventilators:</strong> Hospital patients on breathing machines are at higher risk of
                  pneumonia
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="treatment" className="pt-6">
            <div className="prose max-w-none text-slate-700">
              <p className="lead text-lg mb-4">
                Treatment for pneumonia depends on the type of pneumonia you have, how severe it is, and your general
                health.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg">
                      <Stethoscope className="h-5 w-5 text-green-500 mr-2" />
                      Medical Treatments
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium mb-1">Antibiotics:</h4>
                    <p className="mb-3">
                      These medicines are used to treat bacterial pneumonia. It may take time to identify the type of
                      bacteria causing your pneumonia and to choose the best antibiotic to treat it.
                    </p>

                    <h4 className="font-medium mb-1">Antiviral medications:</h4>
                    <p className="mb-3">
                      If your pneumonia is caused by a virus, your doctor may prescribe an antiviral medication to treat
                      it.
                    </p>

                    <h4 className="font-medium mb-1">Fever reducers:</h4>
                    <p>
                      These include drugs such as aspirin, ibuprofen (Advil, Motrin IB, others) and acetaminophen
                      (Tylenol, others).
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg">
                      <Stethoscope className="h-5 w-5 text-blue-500 mr-2" />
                      Hospital Treatments
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">
                      If your symptoms are severe or you have other health problems, you may need to be hospitalized.
                      Hospital treatments may include:
                    </p>

                    <h4 className="font-medium mb-1">Intravenous antibiotics:</h4>
                    <p className="mb-3">Antibiotics delivered directly into a vein for more severe infections.</p>

                    <h4 className="font-medium mb-1">Oxygen therapy:</h4>
                    <p className="mb-3">
                      If your oxygen level is low, you'll receive oxygen through a mask or nasal cannula.
                    </p>

                    <h4 className="font-medium mb-1">Respiratory treatments:</h4>
                    <p>Treatments to help loosen and remove mucus from your lungs, making it easier to breathe.</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Home Remedies</h3>
              <p>In addition to medical treatment, these steps can help you recover more quickly:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Get plenty of rest:</strong> This helps your body fight the infection
                </li>
                <li>
                  <strong>Stay hydrated:</strong> Drink plenty of fluids, especially water, to help loosen mucus in your
                  lungs
                </li>
                <li>
                  <strong>Take the full course of prescribed medications:</strong> Even if you start to feel better
                </li>
                <li>
                  <strong>Use a humidifier or take steamy baths or showers:</strong> Moist air helps loosen mucus and
                  makes breathing easier
                </li>
                <li>
                  <strong>Don't smoke:</strong> Smoking damages your lungs' ability to fight infection
                </li>
              </ul>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
                <h3 className="text-blue-800 font-semibold flex items-center mb-2">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  Prevention
                </h3>
                <p className="text-blue-700">To help prevent pneumonia:</p>
                <ul className="list-disc pl-6 text-blue-700 mt-1">
                  <li>Get vaccinated. Vaccines are available to prevent some types of pneumonia and the flu</li>
                  <li>
                    Make sure children get vaccinated. Doctors recommend different pneumonia vaccines for children
                    younger than age 2 and for children ages 2 to 5
                  </li>
                  <li>Practice good hygiene. Wash your hands regularly or use an alcohol-based hand sanitizer</li>
                  <li>Don't smoke. Smoking damages your lungs' natural defenses against respiratory infections</li>
                  <li>Keep your immune system strong. Get enough sleep, exercise regularly and eat a healthy diet</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-slate-50 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">How Our AI Detection Works</h2>
          <p className="text-slate-600 mb-6">
            Our AI-powered pneumonia detection system uses advanced machine learning algorithms to analyze chest X-rays
            and identify patterns associated with pneumonia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm">
              <CardHeader className="text-center pb-2">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <CardTitle>Image Processing</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-slate-600">
                <p>X-ray images are preprocessed to enhance features and normalize data for analysis</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader className="text-center pb-2">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">2</span>
                </div>
                <CardTitle>AI Analysis</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-slate-600">
                <p>Our deep learning model analyzes the image to detect patterns associated with pneumonia</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader className="text-center pb-2">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">3</span>
                </div>
                <CardTitle>Clinical Validation</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-slate-600">
                <p>Results are presented with confidence scores to assist healthcare professionals in diagnosis</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Ready to Try Our Detection System?</h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Our AI-powered pneumonia detection system can help healthcare professionals make faster, more accurate
            diagnoses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/detection"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2"
            >
              Try Detection System
            </a>
            <a
              href="/register"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Register as Doctor
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

