"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserForm } from "@/components/user-form"
import { JobForm } from "@/components/job-form"
import { CoverLetterPreview } from "@/components/cover-letter-preview"
import { TemplateSelector } from "@/components/template-selector"
import { Download, FileText, User, Briefcase, PaintBucket } from "lucide-react"

export default function CoverLetterGenerator() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    portfolio: "",
  })

  const [jobData, setJobData] = useState({
    company: "",
    position: "",
    hiringManager: "",
    companyAddress: "",
    jobDescription: "",
    keySkills: "",
  })

  const [selectedTemplate, setSelectedTemplate] = useState("professional")

  const handleUserDataChange = (newData: typeof userData) => {
    setUserData(newData)
  }

  const handleJobDataChange = (newData: typeof jobData) => {
    setJobData(newData)
  }

  const handleTemplateChange = (template: string) => {
    setSelectedTemplate(template)
  }

  const handleDownload = () => {
    // In a real app, this would generate a PDF or Word document
    alert("In a production app, this would download your cover letter as a PDF or Word document.")
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
      <Tabs defaultValue="user" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="user" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Your Details</span>
          </TabsTrigger>
          <TabsTrigger value="job" className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            <span className="hidden sm:inline">Job Details</span>
          </TabsTrigger>
          <TabsTrigger value="template" className="flex items-center gap-2">
            <PaintBucket className="h-4 w-4" />
            <span className="hidden sm:inline">Template</span>
          </TabsTrigger>
        </TabsList>
        <Card>
          <CardContent className="p-6">
            <TabsContent value="user">
              <UserForm userData={userData} onDataChange={handleUserDataChange} />
            </TabsContent>
            <TabsContent value="job">
              <JobForm jobData={jobData} onDataChange={handleJobDataChange} />
            </TabsContent>
            <TabsContent value="template">
              <TemplateSelector selectedTemplate={selectedTemplate} onTemplateChange={handleTemplateChange} />
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
      <div className="flex flex-col gap-4">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-slate-800 text-white p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span className="text-sm font-medium">Preview</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-white hover:text-white hover:bg-slate-700"
                onClick={handleDownload}
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
            <CoverLetterPreview userData={userData} jobData={jobData} template={selectedTemplate} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
