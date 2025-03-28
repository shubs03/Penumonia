import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Heart, Utensils, TreesIcon as Lungs, Brain, Shield } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HealthTipsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Health Tips & Wellness</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive health tips and wellness advice to maintain respiratory health and overall wellbeing
          </p>
        </div>

        <Tabs defaultValue="respiratory" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="respiratory">Respiratory</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="exercise">Exercise</TabsTrigger>
            <TabsTrigger value="mental">Mental Health</TabsTrigger>
            <TabsTrigger value="immunity">Immunity</TabsTrigger>
          </TabsList>

          <TabsContent value="respiratory" className="pt-6">
            <div className="prose max-w-none text-slate-700">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Lungs className="h-6 w-6 mr-2 text-blue-600" />
                Respiratory Health Tips
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Breathing Exercises</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">
                      Regular breathing exercises can strengthen your lungs and improve respiratory function:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Diaphragmatic breathing:</strong> Lie on your back, place one hand on your chest and the
                        other on your abdomen. Breathe in deeply through your nose, feeling your abdomen rise. Exhale
                        slowly through pursed lips.
                      </li>
                      <li>
                        <strong>Pursed lip breathing:</strong> Breathe in through your nose for 2 counts, then exhale
                        slowly through pursed lips for 4 counts.
                      </li>
                      <li>
                        <strong>Box breathing:</strong> Inhale for 4 counts, hold for 4 counts, exhale for 4 counts,
                        hold for 4 counts. Repeat.
                      </li>
                    </ul>
                    <p className="mt-3 text-sm">
                      Practice these exercises for 5-10 minutes daily for optimal respiratory health.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Air Quality Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">The air you breathe significantly impacts your respiratory health:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Monitor air quality:</strong> Use air quality apps to check pollution levels before
                        outdoor activities.
                      </li>
                      <li>
                        <strong>Use air purifiers:</strong> HEPA air purifiers can remove allergens and pollutants from
                        indoor air.
                      </li>
                      <li>
                        <strong>Control humidity:</strong> Maintain indoor humidity between 30-50% to prevent mold
                        growth and dust mites.
                      </li>
                      <li>
                        <strong>Ventilate properly:</strong> Open windows when outdoor air quality is good to refresh
                        indoor air.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Lung-Strengthening Activities</h3>
                <p className="mb-4">These activities can help improve lung capacity and respiratory function:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Swimming:</strong> Engages respiratory muscles and improves breathing patterns
                  </li>
                  <li>
                    <strong>Aerobic exercise:</strong> Jogging, cycling, or brisk walking for 30 minutes, 5 times a week
                  </li>
                  <li>
                    <strong>Playing wind instruments:</strong> Improves breath control and lung capacity
                  </li>
                  <li>
                    <strong>Singing:</strong> Strengthens diaphragm and improves breath control
                  </li>
                  <li>
                    <strong>Yoga:</strong> Combines breathing techniques with gentle movement
                  </li>
                </ul>
              </div>

              <Alert className="bg-amber-50 border-amber-200 mb-8">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                <AlertTitle className="text-amber-800">Important Note</AlertTitle>
                <AlertDescription className="text-amber-700">
                  If you have existing respiratory conditions like asthma or COPD, consult your healthcare provider
                  before starting new breathing exercises or physical activities.
                </AlertDescription>
              </Alert>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Avoiding Respiratory Irritants</h3>
                <p className="mb-4">Minimize exposure to substances that can irritate your lungs:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Quit smoking:</strong> Smoking damages lung tissue and increases risk of respiratory
                    diseases
                  </li>
                  <li>
                    <strong>Avoid secondhand smoke:</strong> Even passive exposure can harm your lungs
                  </li>
                  <li>
                    <strong>Reduce exposure to chemicals:</strong> Use natural cleaning products when possible
                  </li>
                  <li>
                    <strong>Wear protection:</strong> Use masks when working with dust, fumes, or in polluted
                    environments
                  </li>
                  <li>
                    <strong>Avoid strong fragrances:</strong> Perfumes and scented products can trigger respiratory
                    symptoms
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="nutrition" className="pt-6">
            <div className="prose max-w-none text-slate-700">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Utensils className="h-6 w-6 mr-2 text-green-600" />
                Nutrition for Respiratory Health
              </h2>

              <p className="lead text-lg mb-6">
                A balanced diet rich in specific nutrients can support lung health and overall respiratory function.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2 text-center">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2">
                      <span className="text-green-600 font-bold">A</span>
                    </div>
                    <CardTitle className="text-lg">Antioxidant-Rich Foods</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">Antioxidants help reduce inflammation and oxidative stress in the lungs:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Berries (blueberries, strawberries)</li>
                      <li>Dark leafy greens (spinach, kale)</li>
                      <li>Colorful vegetables (bell peppers, carrots)</li>
                      <li>Nuts and seeds</li>
                      <li>Green tea</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2 text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                      <span className="text-blue-600 font-bold">O</span>
                    </div>
                    <CardTitle className="text-lg">Omega-3 Fatty Acids</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">Omega-3s have anti-inflammatory properties that benefit respiratory health:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Fatty fish (salmon, mackerel, sardines)</li>
                      <li>Flaxseeds and flaxseed oil</li>
                      <li>Walnuts</li>
                      <li>Chia seeds</li>
                      <li>Soybeans and tofu</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2 text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-2">
                      <span className="text-purple-600 font-bold">V</span>
                    </div>
                    <CardTitle className="text-lg">Vitamin-Rich Foods</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">Key vitamins that support respiratory function:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>
                        <strong>Vitamin C:</strong> Citrus fruits, kiwi, bell peppers
                      </li>
                      <li>
                        <strong>Vitamin D:</strong> Fatty fish, egg yolks, fortified foods
                      </li>
                      <li>
                        <strong>Vitamin E:</strong> Almonds, sunflower seeds, avocados
                      </li>
                      <li>
                        <strong>Vitamin A:</strong> Sweet potatoes, carrots, spinach
                      </li>
                      <li>
                        <strong>B vitamins:</strong> Whole grains, legumes, meat
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Hydration for Respiratory Health</h3>
                <p className="mb-4">
                  Proper hydration is essential for maintaining the thin layer of mucus in your airways, which helps
                  trap and clear pathogens and irritants:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Water intake:</strong> Aim for 8-10 glasses (2-2.5 liters) of water daily
                  </li>
                  <li>
                    <strong>Herbal teas:</strong> Ginger, peppermint, and chamomile teas can help soothe airways
                  </li>
                  <li>
                    <strong>Warm broths:</strong> Chicken or vegetable broth can help loosen mucus
                  </li>
                  <li>
                    <strong>Limit dehydrating beverages:</strong> Reduce intake of alcohol and caffeine
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Foods to Limit or Avoid</h3>
                <p className="mb-4">Some foods may worsen respiratory symptoms or increase inflammation:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Processed foods:</strong> High in preservatives and additives that may trigger inflammation
                  </li>
                  <li>
                    <strong>Refined sugars:</strong> Can increase inflammation in the body
                  </li>
                  <li>
                    <strong>Salt:</strong> Excessive salt can lead to fluid retention, potentially affecting breathing
                  </li>
                  <li>
                    <strong>Dairy:</strong> May increase mucus production in some individuals
                  </li>
                  <li>
                    <strong>Sulfites:</strong> Found in wine, dried fruits, and preserved foods, can trigger asthma
                    symptoms
                  </li>
                </ul>
              </div>

              <Alert className="bg-blue-50 border-blue-200 mb-8">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                <AlertDescription className="text-blue-700">
                  While these dietary recommendations can support respiratory health, they should complement, not
                  replace, medical treatment for respiratory conditions. Always consult your healthcare provider about
                  dietary changes, especially if you have existing health conditions.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          <TabsContent value="exercise" className="pt-6">
            <div className="prose max-w-none text-slate-700">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Heart className="h-6 w-6 mr-2 text-red-600" />
                Exercise for Respiratory Strength
              </h2>

              <p className="lead text-lg mb-6">
                Regular physical activity is essential for maintaining healthy lungs and improving overall respiratory
                function.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Aerobic Exercises</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">Aerobic exercises improve lung capacity and strengthen respiratory muscles:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Walking:</strong> Start with 15-20 minutes daily and gradually increase to 30-45 minutes
                      </li>
                      <li>
                        <strong>Swimming:</strong> Excellent for respiratory strength as it requires controlled
                        breathing
                      </li>
                      <li>
                        <strong>Cycling:</strong> Low-impact option that improves cardiovascular and respiratory health
                      </li>
                      <li>
                        <strong>Dancing:</strong> Fun way to increase heart rate and improve lung function
                      </li>
                    </ul>
                    <p className="mt-3 text-sm">Aim for at least 150 minutes of moderate aerobic activity per week.</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Breathing Exercises During Workouts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">Proper breathing techniques during exercise maximize respiratory benefits:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Rhythmic breathing:</strong> Coordinate breathing with movement (e.g., inhale for 2-3
                        steps, exhale for 2-3 steps while running)
                      </li>
                      <li>
                        <strong>Belly breathing:</strong> Focus on expanding your abdomen rather than chest when
                        inhaling
                      </li>
                      <li>
                        <strong>Exhale during exertion:</strong> When lifting weights or during the hardest part of an
                        exercise
                      </li>
                      <li>
                        <strong>Avoid breath holding:</strong> Maintain steady breathing throughout your workout
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Yoga and Respiratory Health</h3>
                <p className="mb-4">
                  Yoga combines physical postures with breathing techniques that can significantly improve respiratory
                  function:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Pranayama:</strong> Yogic breathing exercises like alternate nostril breathing (Nadi
                    Shodhana) and bellows breath (Bhastrika)
                  </li>
                  <li>
                    <strong>Chest-opening poses:</strong> Bridge pose, Cobra pose, and Fish pose expand the chest and
                    improve lung capacity
                  </li>
                  <li>
                    <strong>Forward bends:</strong> Help release tension in the respiratory muscles
                  </li>
                  <li>
                    <strong>Twists:</strong> Improve oxygen flow and help clear stagnant air from the lungs
                  </li>
                </ul>
              </div>

              <Alert className="bg-amber-50 border-amber-200 mb-8">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                <AlertTitle className="text-amber-800">Exercise Precautions</AlertTitle>
                <AlertDescription className="text-amber-700">
                  <ul className="list-disc pl-6 mt-2">
                    <li>
                      Start slowly and gradually increase intensity, especially if you have existing respiratory
                      conditions
                    </li>
                    <li>Exercise indoors when outdoor air quality is poor</li>
                    <li>Use your rescue inhaler before exercise if you have asthma (as directed by your doctor)</li>
                    <li>Stop exercising if you experience severe shortness of breath, chest pain, or dizziness</li>
                  </ul>
                </AlertDescription>
              </Alert>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Building an Exercise Routine</h3>
                <p className="mb-4">A balanced exercise program for respiratory health should include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Warm-up:</strong> 5-10 minutes of light activity to prepare your lungs and muscles
                  </li>
                  <li>
                    <strong>Aerobic exercise:</strong> 20-30 minutes, 3-5 times per week
                  </li>
                  <li>
                    <strong>Strength training:</strong> 2-3 times per week to support respiratory muscles
                  </li>
                  <li>
                    <strong>Flexibility exercises:</strong> Daily stretching to maintain chest mobility
                  </li>
                  <li>
                    <strong>Cool-down:</strong> 5-10 minutes of decreasing intensity and stretching
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mental" className="pt-6">
            <div className="prose max-w-none text-slate-700">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Brain className="h-6 w-6 mr-2 text-purple-600" />
                Mental Health & Respiratory Wellness
              </h2>

              <p className="lead text-lg mb-6">
                Mental health and respiratory health are closely connected. Stress and anxiety can affect breathing
                patterns, while respiratory conditions can impact mental wellbeing.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Stress Management Techniques</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">
                      Chronic stress can affect breathing patterns and exacerbate respiratory conditions:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Mindfulness meditation:</strong> Practice focusing on your breath for 10-15 minutes
                        daily
                      </li>
                      <li>
                        <strong>Progressive muscle relaxation:</strong> Systematically tense and relax muscle groups
                      </li>
                      <li>
                        <strong>Guided imagery:</strong> Visualize peaceful scenes to reduce stress
                      </li>
                      <li>
                        <strong>Journaling:</strong> Write down thoughts and feelings to process emotions
                      </li>
                      <li>
                        <strong>Time in nature:</strong> Spending time outdoors can reduce stress and improve air
                        quality
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Breathing for Anxiety Relief</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">Specific breathing techniques can help manage anxiety and panic symptoms:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>4-7-8 breathing:</strong> Inhale for 4 counts, hold for 7 counts, exhale for 8 counts
                      </li>
                      <li>
                        <strong>Equal breathing:</strong> Inhale and exhale for equal counts (e.g., 4-4 or 6-6)
                      </li>
                      <li>
                        <strong>Alternate nostril breathing:</strong> Close one nostril while inhaling, then switch to
                        exhale
                      </li>
                      <li>
                        <strong>Belly breathing:</strong> Place hand on abdomen and focus on expanding it with each
                        breath
                      </li>
                    </ul>
                    <p className="mt-3 text-sm">
                      Practice these techniques regularly, not just during moments of anxiety.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Sleep and Respiratory Health</h3>
                <p className="mb-4">Quality sleep is essential for respiratory health and mental wellbeing:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Maintain a regular sleep schedule:</strong> Go to bed and wake up at consistent times
                  </li>
                  <li>
                    <strong>Create an optimal sleep environment:</strong> Keep bedroom cool, dark, and quiet
                  </li>
                  <li>
                    <strong>Elevate your head:</strong> Use an extra pillow if you have respiratory issues
                  </li>
                  <li>
                    <strong>Avoid screens before bed:</strong> The blue light can disrupt sleep patterns
                  </li>
                  <li>
                    <strong>Consider sleep position:</strong> Side sleeping may be better for those with respiratory
                    conditions
                  </li>
                </ul>
              </div>

              <Alert className="bg-purple-50 border-purple-200 mb-8">
                <AlertCircle className="h-5 w-5 text-purple-600" />
                <AlertTitle className="text-purple-800">Mental Health Support</AlertTitle>
                <AlertDescription className="text-purple-700">
                  If you're experiencing persistent anxiety, depression, or stress that affects your breathing or
                  quality of life, consider seeking professional mental health support. Therapists can provide
                  strategies specifically tailored to managing the psychological aspects of respiratory conditions.
                </AlertDescription>
              </Alert>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Mind-Body Practices</h3>
                <p className="mb-4">
                  These practices integrate physical and mental wellness to support respiratory health:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Tai Chi:</strong> Gentle flowing movements combined with deep breathing
                  </li>
                  <li>
                    <strong>Qigong:</strong> Ancient Chinese practice focusing on breath control and gentle movement
                  </li>
                  <li>
                    <strong>Yoga:</strong> Combines physical postures, breathing techniques, and meditation
                  </li>
                  <li>
                    <strong>Body scan meditation:</strong> Systematically focus attention on different parts of your
                    body
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="immunity" className="pt-6">
            <div className="prose max-w-none text-slate-700">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-green-600" />
                Boosting Immunity for Respiratory Health
              </h2>

              <p className="lead text-lg mb-6">
                A strong immune system is your first line of defense against respiratory infections and diseases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2 text-center">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2">
                      <span className="text-green-600 font-bold">N</span>
                    </div>
                    <CardTitle className="text-lg">Nutrition for Immunity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Vitamin C:</strong> Citrus fruits, bell peppers, strawberries
                      </li>
                      <li>
                        <strong>Vitamin D:</strong> Fatty fish, egg yolks, fortified foods, sunlight
                      </li>
                      <li>
                        <strong>Zinc:</strong> Oysters, beef, pumpkin seeds, lentils
                      </li>
                      <li>
                        <strong>Probiotics:</strong> Yogurt, kefir, fermented foods
                      </li>
                      <li>
                        <strong>Garlic and onions:</strong> Contain immune-boosting compounds
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2 text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                      <span className="text-blue-600 font-bold">L</span>
                    </div>
                    <CardTitle className="text-lg">Lifestyle Factors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Adequate sleep:</strong> 7-9 hours nightly to support immune function
                      </li>
                      <li>
                        <strong>Regular exercise:</strong> Moderate activity improves immune response
                      </li>
                      <li>
                        <strong>Stress management:</strong> Chronic stress weakens immunity
                      </li>
                      <li>
                        <strong>Hydration:</strong> Proper fluid intake supports immune function
                      </li>
                      <li>
                        <strong>Limit alcohol:</strong> Excessive consumption impairs immune response
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2 text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-2">
                      <span className="text-purple-600 font-bold">P</span>
                    </div>
                    <CardTitle className="text-lg">Preventive Measures</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Vaccinations:</strong> Stay up-to-date with recommended vaccines
                      </li>
                      <li>
                        <strong>Hand hygiene:</strong> Wash hands frequently and thoroughly
                      </li>
                      <li>
                        <strong>Avoid sick contacts:</strong> Limit exposure to contagious individuals
                      </li>
                      <li>
                        <strong>Mask wearing:</strong> In crowded places during illness seasons
                      </li>
                      <li>
                        <strong>Regular check-ups:</strong> Monitor respiratory health with your doctor
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Herbal Supports for Immunity</h3>
                <p className="mb-4">Certain herbs and supplements may help support immune function:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Echinacea:</strong> May help reduce the duration and severity of colds
                  </li>
                  <li>
                    <strong>Elderberry:</strong> Contains antioxidants and may help fight inflammation
                  </li>
                  <li>
                    <strong>Ginger:</strong> Has anti-inflammatory and antioxidant properties
                  </li>
                  <li>
                    <strong>Turmeric:</strong> Contains curcumin, which has anti-inflammatory effects
                  </li>
                  <li>
                    <strong>Honey:</strong> Has antimicrobial properties (not for children under 1 year)
                  </li>
                </ul>
                <p className="mt-3 text-sm text-slate-500">
                  Always consult with a healthcare provider before starting any supplements, especially if you have
                  existing health conditions or take medications.
                </p>
              </div>

              <Alert className="bg-blue-50 border-blue-200 mb-8">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                <AlertDescription className="text-blue-700">
                  While these immunity-boosting strategies can help support respiratory health, they are not a
                  substitute for medical care. If you develop symptoms of respiratory illness, consult with a healthcare
                  professional for proper diagnosis and treatment.
                </AlertDescription>
              </Alert>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Seasonal Considerations</h3>
                <p className="mb-4">Adjust your immune-boosting strategies based on seasonal factors:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Winter:</strong> Increase vitamin D intake, maintain indoor humidity, get flu vaccination
                  </li>
                  <li>
                    <strong>Spring:</strong> Address seasonal allergies, which can affect respiratory health
                  </li>
                  <li>
                    <strong>Summer:</strong> Stay hydrated, protect from air pollution on hot days
                  </li>
                  <li>
                    <strong>Fall:</strong> Prepare for cold/flu season with immune-supporting habits
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Take Control of Your Respiratory Health</h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Implementing these health tips can help strengthen your respiratory system and reduce your risk of pneumonia
            and other respiratory conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/detection">
              <Button className="bg-blue-600 hover:bg-blue-700">Try Our Detection System</Button>
            </Link>
            <Link href="/resources">
              <Button variant="outline">Explore Health Resources</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

