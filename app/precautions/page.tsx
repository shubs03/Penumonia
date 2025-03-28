import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Droplets, Users, Utensils, Wind, Thermometer, Bed, VoteIcon as Vaccine } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrecautionsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Pneumonia Precautions</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Learn how to prevent pneumonia and reduce your risk with these essential precautions and lifestyle
            recommendations
          </p>
        </div>

        <Alert className="mb-8 bg-blue-50 border-blue-200">
          <AlertCircle className="h-5 w-5 text-blue-600" />
          <AlertTitle className="text-blue-800">Important Note</AlertTitle>
          <AlertDescription className="text-blue-700">
            These precautions can help reduce the risk of pneumonia, but they cannot guarantee prevention. If you
            experience symptoms of pneumonia, please consult a healthcare professional.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="border-0 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Vaccine className="h-5 w-5 text-green-500 mr-2" />
                Vaccination
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <p className="mb-3">
                Vaccines are one of the most effective ways to prevent pneumonia. The following vaccines are
                recommended:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Pneumococcal vaccines:</strong> Protects against Streptococcus pneumoniae, a common cause of
                  bacterial pneumonia
                </li>
                <li>
                  <strong>Influenza (flu) vaccine:</strong> Annual flu shots reduce the risk of influenza, which can
                  lead to pneumonia
                </li>
                <li>
                  <strong>Haemophilus influenzae type b (Hib) vaccine:</strong> Primarily for children to protect
                  against bacterial infections
                </li>
                <li>
                  <strong>COVID-19 vaccine:</strong> Reduces the risk of severe COVID-19, which can cause pneumonia
                </li>
              </ul>
              <p className="mt-3 text-sm text-slate-500">
                Consult with your healthcare provider about which vaccines are appropriate for you based on your age,
                health status, and risk factors.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Droplets className="h-5 w-5 text-blue-500 mr-2" />
                Hand Hygiene
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <p className="mb-3">
                Proper hand hygiene is crucial for preventing the spread of germs that can cause pneumonia:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Wash hands frequently:</strong> Use soap and water for at least 20 seconds, especially:
                  <ul className="list-circle pl-6 mt-1 space-y-1">
                    <li>Before eating or preparing food</li>
                    <li>After using the bathroom</li>
                    <li>After blowing your nose, coughing, or sneezing</li>
                    <li>After being in public places</li>
                  </ul>
                </li>
                <li>
                  <strong>Use hand sanitizer:</strong> When soap and water aren't available, use an alcohol-based hand
                  sanitizer with at least 60% alcohol
                </li>
                <li>
                  <strong>Avoid touching your face:</strong> Especially your eyes, nose, and mouth, with unwashed hands
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Wind className="h-5 w-5 text-purple-500 mr-2" />
                Respiratory Hygiene
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <p className="mb-3">
                Practicing good respiratory hygiene helps prevent the spread of respiratory infections:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Cover coughs and sneezes:</strong> Use a tissue or the inside of your elbow, not your hands
                </li>
                <li>
                  <strong>Dispose of tissues properly:</strong> Throw used tissues in the trash and wash your hands
                  immediately
                </li>
                <li>
                  <strong>Wear a mask when appropriate:</strong> Especially if you're sick or around people who are ill
                </li>
                <li>
                  <strong>Maintain distance:</strong> Stay at least 6 feet away from people who are sick when possible
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Users className="h-5 w-5 text-orange-500 mr-2" />
                Avoid Crowds
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <p className="mb-3">Limiting exposure to large groups of people can reduce your risk of infection:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Avoid crowded places:</strong> Especially during cold and flu season
                </li>
                <li>
                  <strong>Practice social distancing:</strong> Maintain appropriate distance in public settings
                </li>
                <li>
                  <strong>Limit contact with sick individuals:</strong> Avoid close contact with people who have
                  respiratory infections
                </li>
                <li>
                  <strong>Consider remote options:</strong> When possible, use virtual meetings or shopping during peak
                  illness seasons
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Utensils className="h-5 w-5 text-yellow-500 mr-2" />
                Healthy Lifestyle
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <p className="mb-3">
                Maintaining a healthy lifestyle strengthens your immune system and helps fight off infections:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Eat a balanced diet:</strong> Focus on fruits, vegetables, whole grains, lean proteins, and
                  healthy fats
                </li>
                <li>
                  <strong>Stay physically active:</strong> Regular exercise helps boost your immune system
                </li>
                <li>
                  <strong>Get adequate sleep:</strong> Aim for 7-9 hours of quality sleep each night
                </li>
                <li>
                  <strong>Manage stress:</strong> Chronic stress can weaken your immune system
                </li>
                <li>
                  <strong>Don't smoke:</strong> Smoking damages your lungs and makes them more vulnerable to infection
                </li>
                <li>
                  <strong>Limit alcohol consumption:</strong> Excessive alcohol can impair immune function
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Thermometer className="h-5 w-5 text-red-500 mr-2" />
                Manage Chronic Conditions
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <p className="mb-3">Properly managing existing health conditions can reduce your risk of pneumonia:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Follow treatment plans:</strong> Take medications as prescribed for conditions like asthma,
                  COPD, diabetes, or heart disease
                </li>
                <li>
                  <strong>Attend regular check-ups:</strong> Regular medical care helps manage chronic conditions
                  effectively
                </li>
                <li>
                  <strong>Monitor your condition:</strong> Keep track of symptoms and report changes to your healthcare
                  provider
                </li>
                <li>
                  <strong>Get recommended screenings:</strong> Early detection of health issues can prevent
                  complications
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-slate-50 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Special Precautions for High-Risk Groups</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-600" />
                Older Adults (65+)
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-slate-700">
                <li>Get both pneumococcal vaccines (PCV13 and PPSV23)</li>
                <li>Annual flu vaccination is essential</li>
                <li>Avoid contact with sick individuals when possible</li>
                <li>Seek medical attention promptly for respiratory symptoms</li>
                <li>Stay warm and dry during cold weather</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Users className="h-5 w-5 mr-2 text-purple-600" />
                Young Children
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-slate-700">
                <li>Ensure all recommended childhood vaccines are up to date</li>
                <li>Practice good hand hygiene for both children and caregivers</li>
                <li>Breastfeed infants when possible (provides antibodies)</li>
                <li>Avoid exposure to tobacco smoke</li>
                <li>Keep children away from people with respiratory infections</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Users className="h-5 w-5 mr-2 text-green-600" />
                People with Chronic Conditions
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-slate-700">
                <li>Get recommended pneumococcal and flu vaccines</li>
                <li>Take medications as prescribed</li>
                <li>Monitor symptoms closely and report changes</li>
                <li>Avoid triggers that worsen respiratory conditions</li>
                <li>Have an action plan for respiratory symptoms</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Users className="h-5 w-5 mr-2 text-orange-600" />
                Immunocompromised Individuals
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-slate-700">
                <li>Discuss vaccination schedule with healthcare provider</li>
                <li>Practice strict hand and respiratory hygiene</li>
                <li>Avoid crowds and people with known infections</li>
                <li>Consider wearing a mask in high-risk situations</li>
                <li>Seek medical attention at the first sign of respiratory symptoms</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Recovery and Rest</h2>

          <Card className="border-0 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Bed className="h-5 w-5 text-indigo-500 mr-2" />
                If You Get Sick
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <p className="mb-3">
                If you do develop pneumonia or respiratory symptoms, these measures can help with recovery:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Get plenty of rest:</strong> Allow your body to focus energy on fighting the infection
                </li>
                <li>
                  <strong>Stay hydrated:</strong> Drink plenty of fluids to help loosen mucus in your lungs
                </li>
                <li>
                  <strong>Take medications as prescribed:</strong> Complete the full course of antibiotics if prescribed
                </li>
                <li>
                  <strong>Use a humidifier:</strong> Adding moisture to the air can help ease breathing
                </li>
                <li>
                  <strong>Avoid smoke and pollutants:</strong> These can further irritate your lungs
                </li>
                <li>
                  <strong>Follow up with your doctor:</strong> Attend all recommended follow-up appointments
                </li>
              </ul>
              <p className="mt-3">
                Remember that recovery from pneumonia can take time. Even after you start feeling better, you may still
                feel tired for a month or more.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Early Detection is Key</h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Even with the best precautions, pneumonia can still occur. Early detection and treatment are crucial for
            better outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/detection">
              <Button className="bg-blue-600 hover:bg-blue-700">Try Our Detection System</Button>
            </Link>
            <Link href="/about">
              <Button variant="outline">Learn More About Pneumonia</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

