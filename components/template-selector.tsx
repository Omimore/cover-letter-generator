"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

interface TemplateSelectorProps {
  selectedTemplate: string
  onTemplateChange: (template: string) => void
}

export function TemplateSelector({ selectedTemplate, onTemplateChange }: TemplateSelectorProps) {
  const templates = [
    {
      id: "professional",
      name: "Professional",
      description: "Clean and traditional format suitable for most industries",
    },
    {
      id: "modern",
      name: "Modern",
      description: "Contemporary design for creative and tech positions",
    },
    {
      id: "minimal",
      name: "Minimal",
      description: "Simple and straightforward with focus on content",
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Choose a Template</h2>

      <RadioGroup value={selectedTemplate} onValueChange={onTemplateChange} className="space-y-3">
        {templates.map((template) => (
          <div key={template.id} className="flex items-start space-x-3">
            <RadioGroupItem value={template.id} id={template.id} className="mt-1" />
            <div className="grid gap-1.5">
              <Label htmlFor={template.id} className="font-medium">
                {template.name}
              </Label>
              <p className="text-sm text-slate-500">{template.description}</p>
            </div>
          </div>
        ))}
      </RadioGroup>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {templates.map((template) => (
          <Card
            key={template.id}
            className={`cursor-pointer transition-all ${
              selectedTemplate === template.id ? "ring-2 ring-slate-900 dark:ring-slate-100" : "hover:bg-slate-50"
            }`}
            onClick={() => onTemplateChange(template.id)}
          >
            <CardContent className="p-4">
              <div className="aspect-[8.5/11] bg-white border rounded-sm flex items-center justify-center">
                <div className={`w-full h-full p-3 ${getTemplatePreviewStyle(template.id)}`}>
                  <div className="w-1/2 h-2 bg-slate-200 mb-2"></div>
                  <div className="w-3/4 h-2 bg-slate-200 mb-4"></div>
                  <div className="w-full h-1 bg-slate-100 mb-3"></div>
                  <div className="space-y-1">
                    <div className="w-full h-1 bg-slate-100"></div>
                    <div className="w-full h-1 bg-slate-100"></div>
                    <div className="w-3/4 h-1 bg-slate-100"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function getTemplatePreviewStyle(templateId: string) {
  switch (templateId) {
    case "professional":
      return "border-t-4 border-t-slate-700"
    case "modern":
      return "border-l-4 border-l-slate-700"
    case "minimal":
      return "border border-slate-200"
    default:
      return ""
  }
}
