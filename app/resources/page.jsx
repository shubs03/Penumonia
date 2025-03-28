import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, BookOpen, FileText, Video, Globe, GraduationCap } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ResourcesPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Medical Resources</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive collection of trusted resources for pneumonia and respiratory health education
          </p>
        </div>

        <Tabs defaultValue="educational" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="educational">Educational</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="organizations">Organizations</TabsTrigger>
            <TabsTrigger value="tools">Tools & Apps</TabsTrigger>
          </TabsList>

          <TabsContent value="educational" className="pt-6">
            <div className="prose max-w-none text-slate-700">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <BookOpen className="h-6 w-6 mr-2 text-blue-600" />
                Educational Resources
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex items-center mb-2">
                      <Video className="h-5 w-5 mr-2 text-red-500" />
                      <CardTitle className="text-lg">Video Resources</CardTitle>
                    </div>
                    <CardDescription>Educational videos about pneumonia and respiratory health</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-1">Understanding Pneumonia</h4>
                      <p className="text-sm text-slate-600 mb-1">By Mayo Clinic</p>
                      <p className="text-sm">Comprehensive overview of pneumonia causes, symptoms, and treatments.</p>
                      <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1 inline-block">
                        Watch Video →
                      </a>
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">Lung Health Basics</h4>
                      <p className="text-sm text-slate-600 mb-1">By American Lung Association</p>
                      <p className="text-sm">
                        Educational series on maintaining healthy lungs and preventing respiratory diseases.
                      </p>
                      <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1 inline-block">
                        Watch Series →
                      </a>
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">Respiratory System Animation</h4>
                      <p className="text-sm text-slate-600 mb-1">By Osmosis</p>
                      <p className="text-sm">Detailed animation explaining how the respiratory system works.</p>
                      <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1 inline-block">
                        Watch Animation →
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex items-center mb-2">
                      <FileText className="h-5 w-5 mr-2 text-green-500" />
                      <CardTitle className="text-lg">Articles & Guides</CardTitle>
                    </div>
                    <CardDescription>In-depth articles and patient guides</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-1">Pneumonia Patient Guide</h4>
                      <p className="text-sm text-slate-600 mb-1">By Cleveland Clinic</p>
                      <p className="text-sm">Comprehensive guide for patients diagnosed with pneumonia.</p>
                      <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1 inline-block">
                        Read Guide →
                      </a>
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">Preventing Respiratory Infections</h4>
                      <p className="text-sm text-slate-600 mb-1">By CDC</p>
                      <p className="text-sm">Practical steps to reduce your risk of respiratory infections.</p>
                      <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1 inline-block">
                        Read Article →
                      </a>
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">Understanding Chest X-rays</h4>
                      <p className="text-sm text-slate-600 mb-1">By Radiological Society of North America</p>
                      <p className="text-sm">
                        Guide to understanding chest X-rays and what they reveal about lung health.
                      </p>
                      <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1 inline-block">
                        Read Guide →
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Online Courses</h3>

                <div className="grid grid-cols-1 gap-4">
                  <Card className="border-0 shadow-sm">
                    <CardHeader className="pb-2">
                      <div className="flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
                        <CardTitle className="text-lg">Respiratory Health Courses</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 rounded-lg">
                          <h4 className="font-medium mb-1">Respiratory Pathophysiology</h4>
                          <p className="text-sm text-slate-600 mb-1">By Harvard Medical School (edX)</p>
                          <p className="text-sm mb-2">
                            Comprehensive course on respiratory system diseases and disorders.
                          </p>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            Free / Paid Certificate
                          </span>
                        </div>

                        <div className="p-4 bg-slate-50 rounded-lg">
                          <h4 className="font-medium mb-1">Understanding Pneumonia</h4>
                          <p className="text-sm text-slate-600 mb-1">By Johns Hopkins University (Coursera)</p>
                          <p className="text-sm mb-2">Learn about pneumonia diagnosis, treatment, and prevention.</p>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            Free / Paid Certificate
                          </span>
                        </div>

                        <div className="p-4 bg-slate-50 rounded-lg">
                          <h4 className="font-medium mb-1">Lung Imaging Interpretation</h4>
                          <p className="text-sm text-slate-600 mb-1">By University of Michigan (FutureLearn)</p>
                          <p className="text-sm mb-2">Introduction to reading and interpreting lung imaging studies.</p>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Paid Course</span>
                        </div>

                        <div className="p-4 bg-slate-50 rounded-lg">
                          <h4 className="font-medium mb-1">Respiratory Care for Nurses</h4>
                          <p className="text-sm text-slate-600 mb-1">By American Nurses Association</p>
                          <p className="text-sm mb-2">
                            Continuing education for healthcare professionals on respiratory care.
                          </p>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            Paid Course / CE Credits
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        View All Courses →
                      </a>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              <Alert className="bg-amber-50 border-amber-200 mb-8">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                <AlertDescription className="text-amber-700">
                  Educational resources are for informational purposes only and should not replace professional medical
                  advice. Always consult with a healthcare provider for diagnosis and treatment.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          <TabsContent value="research" className="pt-6">
            <div className="prose max-w-none text-slate-700">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <FileText className="h-6 w-6 mr-2 text-purple-600" />
                Research & Publications
              </h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Recent Research Papers</h3>

                <div className="space-y-4">
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-1">
                        Advances in AI-Based Pneumonia Detection from Chest Radiographs
                      </h4>
                      <p className="text-sm text-slate-600 mb-2">Journal of Medical Imaging, 2023</p>
                      <p className="text-sm mb-3">
                        This systematic review examines recent advances in artificial intelligence applications for
                        pneumonia detection using chest X-rays, with a focus on deep learning algorithms and their
                        clinical validation.
                      </p>
                      <div className="flex items-center text-sm text-slate-500">
                        <span className="mr-4">Authors: Zhang et al.</span>
                        <span>DOI: 10.xxxx/xxxxx</span>
                      </div>
                      <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 inline-block">
                        Access Paper →
                      </a>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-1">
                        Clinical Outcomes of Early vs. Delayed Antibiotic Treatment in Community-Acquired Pneumonia
                      </h4>
                      <p className="text-sm text-slate-600 mb-2">New England Journal of Medicine, 2023</p>
                      <p className="text-sm mb-3">
                        This randomized controlled trial investigates the impact of early versus delayed antibiotic
                        administration on clinical outcomes in patients with community-acquired pneumonia.
                      </p>
                      <div className="flex items-center text-sm text-slate-500">
                        <span className="mr-4">Authors: Johnson et al.</span>
                        <span>DOI: 10.xxxx/xxxxx</span>
                      </div>
                      <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 inline-block">
                        Access Paper →
                      </a>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-1">Biomarkers for Pneumonia Diagnosis: A Comprehensive Review</h4>
                      <p className="text-sm text-slate-600 mb-2">Clinical Microbiology Reviews, 2022</p>
                      <p className="text-sm mb-3">
                        This review examines current and emerging biomarkers for pneumonia diagnosis, with emphasis on
                        their sensitivity, specificity, and clinical utility in different patient populations.
                      </p>
                      <div className="flex items-center text-sm text-slate-500">
                        <span className="mr-4">Authors: Patel et al.</span>
                        <span>DOI: 10.xxxx/xxxxx</span>
                      </div>
                      <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 inline-block">
                        Access Paper →
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Research Databases</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-0 shadow-md">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Medical Research Databases</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <h4 className="font-medium mb-1">PubMed</h4>
                        <p className="text-sm">
                          Comprehensive database of biomedical literature from MEDLINE, life science journals, and
                          online books.
                        </p>
                        <a
                          href="https://pubmed.ncbi.nlm.nih.gov/"
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1 inline-block"
                        >
                          Access PubMed →
                        </a>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">Cochrane Library</h4>
                        <p className="text-sm">
                          Collection of databases containing high-quality, independent evidence to inform healthcare
                          decision-making.
                        </p>
                        <a
                          href="https://www.cochranelibrary.com/"
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1 inline-block"
                        >
                          Access Cochrane →
                        </a>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">Google Scholar</h4>
                        <p className="text-sm">Broadly searches scholarly literature across disciplines and sources.</p>
                        <a
                          href="https://scholar.google.com/"
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1 inline-block"
                        >
                          Access Google Scholar →
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Specialized Respiratory Research</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <h4 className="font-medium mb-1">American Thoracic Society Journals</h4>
                        <p className="text-sm">Publications focused on pulmonary, critical care, and sleep medicine.</p>
                        <a
                          href="https://www.atsjournals.org/"
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1 inline-block"
                        >
                          Access ATS Journals →
                        </a>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">European Respiratory Journal</h4>
                        <p className="text-sm">
                          Official journal of the European Respiratory Society publishing clinical and experimental work
                          in respiratory medicine.
                        </p>
                        <a
                          href="https://erj.ersjournals.com/"
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1 inline-block"
                        >
                          Access ERJ →
                        </a>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">Pneumonia Journal</h4>
                        <p className="text-sm">Open-access journal focused exclusively on pneumonia research.</p>
                        <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1 inline-block">
                          Access Pneumonia Journal →
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Alert className="bg-blue-50 border-blue-200 mb-8">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                <AlertDescription className="text-blue-700">
                  Many research papers require institutional access or payment. Consider using resources like Unpaywall,
                  Open Access Button, or your local medical library to access research literature.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          <TabsContent value="organizations" className="pt-6">
            <div className="prose max-w-none text-slate-700">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Globe className="h-6 w-6 mr-2 text-blue-600" />
                Health Organizations & Associations
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Global Health Organizations</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-1">World Health Organization (WHO)</h4>
                      <p className="text-sm mb-2">
                        Global health authority providing leadership on health matters, setting standards, and
                        monitoring health trends.
                      </p>
                      <div className="space-y-1">
                        <a
                          href="https://www.who.int/health-topics/pneumonia"
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium block"
                        >
                          WHO Pneumonia Resources →
                        </a>
                        <a
                          href="https://www.who.int/publications/i/item/9789241550536"
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium block"
                        >
                          Pneumonia Guidelines →
                        </a>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">Centers for Disease Control and Prevention (CDC)</h4>
                      <p className="text-sm mb-2">
                        U.S. health protection agency providing information on diseases, including pneumonia prevention
                        and control.
                      </p>
                      <div className="space-y-1">
                        <a
                          href="https://www.cdc.gov/pneumonia/"
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium block"
                        >
                          CDC Pneumonia Information →
                        </a>
                        <a
                          href="https://www.cdc.gov/vaccines/vpd/pneumo/"
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium block"
                        >
                          Pneumococcal Vaccination →
                        </a>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">Forum of International Respiratory Societies (FIRS)</h4>
                      <p className="text-sm mb-2">
                        Organization of leading international respiratory societies working to improve lung health
                        globally.
                      </p>
                      <a
                        href="https://www.firsnet.org/"
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium block"
                      >
                        FIRS Website →
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Specialized Respiratory Organizations</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-1">American Lung Association</h4>
                      <p className="text-sm mb-2">
                        Organization dedicated to lung health and preventing lung disease through research, education,
                        and advocacy.
                      </p>
                      <div className="space-y-1">
                        <a
                          href="https://www.lung.org/lung-health-diseases/lung-disease-lookup/pneumonia"
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium block"
                        >
                          Pneumonia Resources →
                        </a>
                        <a
                          href="https://www.lung.org/lung-health-diseases/wellness"
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium block"
                        >
                          Lung Health Resources →
                        </a>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">European Respiratory Society (ERS)</h4>
                      <p className="text-sm mb-2">
                        International organization bringing together physicians, healthcare professionals, and
                        scientists in the field of respiratory medicine.
                      </p>
                      <a
                        href="https://www.ersnet.org/"
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium block"
                      >
                        ERS Website →
                      </a>
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">American Thoracic Society (ATS)</h4>
                      <p className="text-sm mb-2">
                        International society focusing on respiratory, critical care, and sleep medicine.
                      </p>
                      <div className="space-y-1">
                        <a
                          href="https://www.thoracic.org/patients/patient-resources/resources/pneumonia.pdf"
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium block"
                        >
                          Pneumonia Patient Information →
                        </a>
                        <a
                          href="https://www.thoracic.org/statements/"
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium block"
                        >
                          Clinical Practice Guidelines →
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Patient Support Organizations</h3>

                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Support Resources for Patients</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-1">Breathe Easy Network</h4>
                        <p className="text-sm mb-2">
                          Support network for people with lung conditions, providing information and community
                          resources.
                        </p>
                        <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium block">
                          Visit Website →
                        </a>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">Pneumonia Foundation</h4>
                        <p className="text-sm mb-2">
                          Organization dedicated to pneumonia awareness, prevention, and supporting affected
                          individuals.
                        </p>
                        <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium block">
                          Visit Website →
                        </a>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">COPD Foundation</h4>
                        <p className="text-sm mb-2">
                          Resources for chronic obstructive pulmonary disease and related respiratory conditions.
                        </p>
                        <a
                          href="https://www.copdfoundation.org/"
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium block"
                        >
                          Visit Website →
                        </a>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">Pulmonary Fibrosis Foundation</h4>
                        <p className="text-sm mb-2">
                          Support for patients with pulmonary fibrosis and other interstitial lung diseases.
                        </p>
                        <a
                          href="https://www.pulmonaryfibrosis.org/"
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium block"
                        >
                          Visit Website →
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tools" className="pt-6">
            <div className="prose max-w-none text-slate-700">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <FileText className="h-6 w-6 mr-2 text-green-600" />
                Tools & Applications
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Mobile Health Apps</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-1">Breathe Well</h4>
                      <p className="text-sm mb-1">
                        Breathing exercise app to improve lung function and respiratory health.
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs bg-slate-100 text-slate-800 px-2 py-1 rounded-full">iOS</span>
                        <span className="text-xs bg-slate-100 text-slate-800 px-2 py-1 rounded-full">Android</span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Free</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">Lung Monitor</h4>
                      <p className="text-sm mb-1">
                        Track respiratory symptoms, medication, and lung function over time.
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs bg-slate-100 text-slate-800 px-2 py-1 rounded-full">iOS</span>
                        <span className="text-xs bg-slate-100 text-slate-800 px-2 py-1 rounded-full">Android</span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Freemium</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">Air Quality Index</h4>
                      <p className="text-sm mb-1">Monitor local air quality to help manage respiratory health.</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs bg-slate-100 text-slate-800 px-2 py-1 rounded-full">iOS</span>
                        <span className="text-xs bg-slate-100 text-slate-800 px-2 py-1 rounded-full">Android</span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Free</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">MediSafe</h4>
                      <p className="text-sm mb-1">Medication reminder app to help manage treatment regimens.</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs bg-slate-100 text-slate-800 px-2 py-1 rounded-full">iOS</span>
                        <span className="text-xs bg-slate-100 text-slate-800 px-2 py-1 rounded-full">Android</span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Freemium</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Online Tools & Calculators</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-1">Pneumonia Severity Index Calculator</h4>
                      <p className="text-sm mb-1">
                        Clinical tool to assess pneumonia severity and guide treatment decisions.
                      </p>
                      <p className="text-xs text-slate-500 mb-1">For healthcare professionals only</p>
                      <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium block">
                        Access Tool →
                      </a>
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">CURB-65 Score Calculator</h4>
                      <p className="text-sm mb-1">Tool to assess severity of community-acquired pneumonia.</p>
                      <p className="text-xs text-slate-500 mb-1">For healthcare professionals only</p>
                      <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium block">
                        Access Tool →
                      </a>
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">Lung Age Calculator</h4>
                      <p className="text-sm mb-1">Estimates your lung age based on lung function measurements.</p>
                      <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium block">
                        Access Tool →
                      </a>
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">Vaccination Schedule Tool</h4>
                      <p className="text-sm mb-1">
                        Personalized tool to determine recommended pneumonia vaccinations based on age and health
                        status.
                      </p>
                      <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium block">
                        Access Tool →
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Alert className="bg-blue-50 border-blue-200 mb-8">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                <AlertDescription className="text-blue-700">
                  Medical apps and tools should be used as supplements to, not replacements for, professional medical
                  care. Always consult healthcare providers for medical advice and treatment decisions.
                </AlertDescription>
              </Alert>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Professional Resources</h3>

                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">For Healthcare Professionals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-1">Clinical Decision Support Tools</h4>
                        <p className="text-sm mb-2">
                          Evidence-based tools to assist in clinical decision-making for pneumonia diagnosis and
                          management.
                        </p>
                        <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium block">
                          Access Tools →
                        </a>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">Pneumonia Management Guidelines</h4>
                        <p className="text-sm mb-2">
                          Latest clinical practice guidelines from major respiratory societies.
                        </p>
                        <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium block">
                          Access Guidelines →
                        </a>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">Continuing Medical Education</h4>
                        <p className="text-sm mb-2">
                          Online courses and resources for healthcare professionals on pneumonia and respiratory care.
                        </p>
                        <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium block">
                          Access CME →
                        </a>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">Antibiotic Stewardship Resources</h4>
                        <p className="text-sm mb-2">
                          Tools and guidelines for appropriate antibiotic use in pneumonia treatment.
                        </p>
                        <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium block">
                          Access Resources →
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Try Our AI-Powered Detection System</h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Our advanced AI system can help healthcare professionals detect pneumonia from chest X-rays with high
            accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/detection">
              <Button className="bg-blue-600 hover:bg-blue-700">Try Detection System</Button>
            </Link>
            <Link href="/faq">
              <Button variant="outline">View FAQ</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

