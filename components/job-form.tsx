"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface JobData {
  company: string
  position: string
  hiringManager: string
  companyAddress: string
  jobDescription: string
  keySkills: string
}

interface JobFormProps {
  jobData: JobData
  onDataChange: (data: JobData) => void
}

export function JobForm({ jobData, onDataChange }: JobFormProps) {
  const [formData, setFormData] = useState<JobData>(jobData)

  useEffect(() => {
    setFormData(jobData)
  }, [jobData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const newData = { ...formData, [name]: value }
    setFormData(newData)
    onDataChange(newData)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Job Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="company">Company Name</Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corporation"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="position">Position</Label>
          <Input
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Frontend Developer"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="hiringManager">Hiring Manager (if known)</Label>
          <Input
            id="hiringManager"
            name="hiringManager"
            value={formData.hiringManager}
            onChange={handleChange}
            placeholder="Jane Smith"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="companyAddress">Company Address (optional)</Label>
          <Input
            id="companyAddress"
            name="companyAddress"
            value={formData.companyAddress}
            onChange={handleChange}
            placeholder="456 Business Ave, City, State"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="jobDescription">Job Description (paste key points)</Label>
        <Textarea
          id="jobDescription"
          name="jobDescription"
          value={formData.jobDescription}
          onChange={handleChange}
          placeholder="Key responsibilities and requirements from the job posting..."
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="keySkills">Your Relevant Skills (separate with commas)</Label>
        <Textarea
          id="keySkills"
          name="keySkills"
          value={formData.keySkills}
          onChange={handleChange}
          placeholder="React, JavaScript, UI/UX, Team collaboration..."
          rows={2}
        />
      </div>
    </div>
  )
}
