"use client"

import { useEffect, useState } from "react"

interface UserData {
  name: string
  email: string
  phone: string
  address: string
  linkedin: string
  portfolio: string
}

interface JobData {
  company: string
  position: string
  hiringManager: string
  companyAddress: string
  jobDescription: string
  keySkills: string
}

interface CoverLetterPreviewProps {
  userData: UserData
  jobData: JobData
  template: string
}

export function CoverLetterPreview({ userData, jobData, template }: CoverLetterPreviewProps) {
  const [currentDate, setCurrentDate] = useState("")

  useEffect(() => {
    const date = new Date()
    setCurrentDate(
      date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    )
  }, [])

  const greeting = jobData.hiringManager ? `Dear ${jobData.hiringManager},` : "Dear Hiring Manager,"

  const generateCoverLetterContent = () => {
    // This is a simplified version - in a real app, you might use AI or templates
    const skills = jobData.keySkills
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean)

    return (
      <>
        <p className="mb-4">
          I am writing to express my interest in the {jobData.position} position at {jobData.company}. With my
          background and skills in {skills.slice(0, 3).join(", ")}
          {skills.length > 3 ? ", and more" : ""}, I am confident that I would be a valuable addition to your team.
        </p>

        <p className="mb-4">
          Throughout my career, I have developed strong expertise in {skills.slice(0, 2).join(" and ")}. I am
          particularly drawn to {jobData.company} because of its reputation for
          {jobData.jobDescription ? " " + jobData.jobDescription.split(".")[0] : " excellence in the industry"}.
        </p>

        <p className="mb-4">
          I would welcome the opportunity to discuss how my skills and experiences align with your needs for the{" "}
          {jobData.position} role. Thank you for considering my application.
        </p>

        <p className="mb-4">Sincerely,</p>

        <p>{userData.name}</p>
      </>
    )
  }

  const getTemplateStyles = () => {
    switch (template) {
      case "professional":
        return {
          container: "font-serif border-t-4 border-slate-700 p-8",
          header: "mb-8",
          content: "",
        }
      case "modern":
        return {
          container: "font-sans border-l-4 border-slate-700 p-8",
          header: "mb-8",
          content: "",
        }
      case "minimal":
        return {
          container: "font-sans p-8",
          header: "mb-8",
          content: "",
        }
      default:
        return {
          container: "font-serif p-8",
          header: "mb-8",
          content: "",
        }
    }
  }

  const styles = getTemplateStyles()

  return (
    <div className="bg-white">
      <div className={`min-h-[600px] ${styles.container}`}>
        {/* Header with contact info */}
        <div className={styles.header}>
          <div className="mb-6">
            <h1 className="text-xl font-bold mb-1">{userData.name || "Your Name"}</h1>
            <div className="text-sm text-slate-600 space-y-1">
              {userData.address && <div>{userData.address}</div>}
              <div className="flex flex-wrap gap-x-3">
                {userData.email && <span>{userData.email}</span>}
                {userData.phone && <span>{userData.phone}</span>}
              </div>
              <div className="flex flex-wrap gap-x-3">
                {userData.linkedin && <span>{userData.linkedin}</span>}
                {userData.portfolio && <span>{userData.portfolio}</span>}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="text-sm">{currentDate}</div>
          </div>

          {jobData.company && (
            <div className="mb-6">
              <div className="font-medium">{jobData.company}</div>
              {jobData.companyAddress && <div className="text-sm">{jobData.companyAddress}</div>}
            </div>
          )}

          <div className="mb-6">{greeting}</div>
        </div>

        {/* Cover letter content */}
        <div className={styles.content}>{generateCoverLetterContent()}</div>
      </div>
    </div>
  )
}
