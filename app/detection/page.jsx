"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, FileText, AlertCircle, CheckCircle2, X } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"

export default function DetectionPage() {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [result, setResult] = useState(null)
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      setFile(selectedFile)

      // Create preview URL
      const reader = new FileReader()
      reader.onload = (event) => {
        setPreview(event.target?.result)
      }
      reader.readAsDataURL(selectedFile)

      // Reset analysis state
      setAnalysisComplete(false)
      setResult(null)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0]
      setFile(droppedFile)

      // Create preview URL
      const reader = new FileReader()
      reader.onload = (event) => {
        setPreview(event.target?.result)
      }
      reader.readAsDataURL(droppedFile)

      // Reset analysis state
      setAnalysisComplete(false)
      setResult(null)
    }
  }

  const handleAnalyze = () => {
    if (!file) return

    setIsAnalyzing(true)

    // Simulate API call to backend
    setTimeout(() => {
      // Mock result - in a real app, this would come from the Flask API
      const mockResult = {
        diagnosis: Math.random() > 0.5 ? "positive" : "negative",
        confidence: 70 + Math.floor(Math.random() * 25),
        areas: ["Lower right lung", "Middle lobe"],
      }

      setResult(mockResult)
      setIsAnalyzing(false)
      setAnalysisComplete(true)
    }, 3000)
  }

  const handleReset = () => {
    setFile(null)
    setPreview(null)
    setAnalysisComplete(false)
    setResult(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Pneumonia Detection</h1>
          <p className="text-slate-600">Upload a chest X-ray image for AI-powered pneumonia detection</p>
        </div>

        <Alert className="mb-6 bg-blue-50 border-blue-200">
          <AlertCircle className="h-4 w-4 text-blue-600" />
          <AlertTitle className="text-blue-800">Doctor Access Only</AlertTitle>
          <AlertDescription className="text-blue-700">
            This tool is intended for use by healthcare professionals only. Please ensure patient consent before
            uploading X-rays.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-md h-full">
              <CardHeader>
                <CardTitle>Upload X-ray</CardTitle>
                <CardDescription>Select or drag & drop a chest X-ray image</CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center ${
                    preview ? "border-blue-300 bg-blue-50" : "border-slate-300 hover:border-blue-400"
                  } transition-colors cursor-pointer`}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />

                  {preview ? (
                    <div className="relative">
                      <img
                        src={preview || "/placeholder.svg"}
                        alt="X-ray preview"
                        className="max-h-64 mx-auto rounded-lg"
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleReset()
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="py-8">
                      <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                      <p className="text-slate-600 mb-2">Click or drag & drop to upload</p>
                      <p className="text-xs text-slate-500">Supports: JPG, PNG, DICOM</p>
                    </div>
                  )}
                </div>

                {file && (
                  <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2" />
                      <span className="truncate max-w-[200px]">{file.name}</span>
                    </div>
                    <span>{(file.size / (1024 * 1024)).toFixed(2)} MB</span>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  onClick={handleAnalyze}
                  disabled={!file || isAnalyzing}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  {isAnalyzing ? (
                    <>
                      <span className="mr-2">Analyzing...</span>
                      <Progress value={45} className="w-20" />
                    </>
                  ) : (
                    "Analyze X-ray"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Card className="border-0 shadow-md h-full">
              <CardHeader>
                <CardTitle>Analysis Results</CardTitle>
                <CardDescription>
                  {analysisComplete ? "AI-powered pneumonia detection results" : "Upload an X-ray to see results"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!file && !analysisComplete ? (
                  <div className="text-center py-16 text-slate-500">
                    <FileText className="h-16 w-16 mx-auto mb-4 opacity-30" />
                    <p>No X-ray uploaded yet</p>
                    <p className="text-sm mt-2">Upload an X-ray to see AI analysis results</p>
                  </div>
                ) : isAnalyzing ? (
                  <div className="text-center py-16">
                    <div className="animate-pulse mb-4">
                      <div className="h-4 bg-slate-200 rounded w-3/4 mx-auto mb-2"></div>
                      <div className="h-4 bg-slate-200 rounded w-1/2 mx-auto"></div>
                    </div>
                    <p className="text-slate-600">Analyzing X-ray image...</p>
                    <Progress value={45} className="w-3/4 mx-auto mt-4" />
                  </div>
                ) : analysisComplete && result ? (
                  <Tabs defaultValue="summary" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="summary">Summary</TabsTrigger>
                      <TabsTrigger value="details">Details</TabsTrigger>
                      <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                    </TabsList>

                    <TabsContent value="summary" className="pt-4">
                      <div className="text-center mb-6">
                        {result.diagnosis === "positive" ? (
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                            <AlertCircle className="h-8 w-8 text-red-600" />
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                            <CheckCircle2 className="h-8 w-8 text-green-600" />
                          </div>
                        )}

                        <h3 className="text-2xl font-bold mb-2">
                          {result.diagnosis === "positive" ? "Pneumonia Detected" : "No Pneumonia Detected"}
                        </h3>

                        <Badge
                          className={
                            result.diagnosis === "positive"
                              ? "bg-red-100 text-red-800 hover:bg-red-100"
                              : "bg-green-100 text-green-800 hover:bg-green-100"
                          }
                        >
                          {result.confidence}% Confidence
                        </Badge>
                      </div>

                      {result.diagnosis === "positive" && (
                        <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                          <h4 className="font-medium mb-2">Affected Areas:</h4>
                          <ul className="list-disc pl-5 text-slate-700">
                            {result.areas.map((area, index) => (
                              <li key={index}>{area}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </TabsContent>

                    <TabsContent value="details" className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Analysis Details:</h4>
                          <p className="text-slate-700">
                            {result.diagnosis === "positive"
                              ? "The AI model has detected patterns consistent with pneumonia in the uploaded X-ray image. The analysis shows opacity in the affected areas, which is a common indicator of pneumonia infection."
                              : "The AI model did not detect patterns consistent with pneumonia in the uploaded X-ray image. The lungs appear clear without significant opacities or consolidations."}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">Confidence Score:</h4>
                          <div className="flex items-center">
                            <Progress value={result.confidence} className="flex-1 mr-4" />
                            <span className="font-medium">{result.confidence}%</span>
                          </div>
                          <p className="text-sm text-slate-500 mt-1">
                            Confidence score represents the AI model's certainty in its diagnosis
                          </p>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">Model Information:</h4>
                          <p className="text-slate-700">
                            Analysis performed using PneumoNet v2.1, trained on 100,000+ X-ray images with 94% accuracy
                            on validation datasets.
                          </p>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="recommendations" className="pt-4">
                      <div className="space-y-4">
                        <Alert className="bg-blue-50 border-blue-200">
                          <AlertCircle className="h-4 w-4 text-blue-600" />
                          <AlertDescription className="text-blue-700">
                            This is an AI-assisted diagnosis. Always use clinical judgment and consider additional tests
                            if necessary.
                          </AlertDescription>
                        </Alert>

                        {result.diagnosis === "positive" ? (
                          <>
                            <div>
                              <h4 className="font-medium mb-2">Recommended Actions:</h4>
                              <ul className="list-disc pl-5 text-slate-700 space-y-1">
                                <li>Consider antibiotic treatment based on clinical presentation</li>
                                <li>Monitor oxygen saturation levels</li>
                                <li>Consider additional tests (blood work, sputum culture)</li>
                                <li>Follow up imaging in 2-3 weeks to confirm resolution</li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-medium mb-2">Patient Care:</h4>
                              <ul className="list-disc pl-5 text-slate-700 space-y-1">
                                <li>Ensure adequate hydration</li>
                                <li>Recommend rest and supportive care</li>
                                <li>Educate on respiratory hygiene and infection control</li>
                              </ul>
                            </div>
                          </>
                        ) : (
                          <>
                            <div>
                              <h4 className="font-medium mb-2">Recommended Actions:</h4>
                              <ul className="list-disc pl-5 text-slate-700 space-y-1">
                                <li>Consider alternative diagnoses for respiratory symptoms</li>
                                <li>Monitor symptoms and follow up if condition worsens</li>
                                <li>Consider additional tests if clinically indicated</li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-medium mb-2">Patient Care:</h4>
                              <ul className="list-disc pl-5 text-slate-700 space-y-1">
                                <li>Provide symptomatic relief as needed</li>
                                <li>Educate on respiratory hygiene</li>
                                <li>Advise to return if symptoms worsen or persist</li>
                              </ul>
                            </div>
                          </>
                        )}
                      </div>
                    </TabsContent>
                  </Tabs>
                ) : null}
              </CardContent>
              {analysisComplete && (
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={handleReset}>
                    Upload New X-ray
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700">Generate Report</Button>
                </CardFooter>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

