# Lead Scoring & Qualification Guide

## Overview
This form is designed to capture quality leads and help you score/prioritize them effectively.

## Lead Scoring Matrix

### 🎯 High Priority Leads (HOT - 80-100 points)
**Characteristics:**
- Budget: £25,000+
- Timeline: ASAP or Soon (1-3 months)
- Project Type: Extension, New Build, Major Renovation
- Location: Within SW London (SW postcodes)
- Complete project details provided

**Action:** Contact within 2-4 hours

---

### 🔥 Medium Priority Leads (WARM - 50-79 points)
**Characteristics:**
- Budget: £10,000 - £25,000
- Timeline: Planning Stage (3-6 months)
- Project Type: Decking, Landscaping, Renovation
- Location: Greater London
- Some project details provided

**Action:** Contact within 24 hours

---

### 🧊 Low Priority Leads (COLD - 0-49 points)
**Characteristics:**
- Budget: Under £10,000 or "Not sure yet"
- Timeline: Future (6+ months)
- Project Type: Maintenance, Small jobs
- Vague project details
- Outside service area

**Action:** Follow up within 48-72 hours, nurture campaign

---

## Lead Scoring Breakdown

### Budget (Max 30 points)
- Over £100,000: **30 points**
- £50,000 - £100,000: **25 points**
- £25,000 - £50,000: **20 points**
- £10,000 - £25,000: **15 points**
- £5,000 - £10,000: **10 points**
- Under £5,000: **5 points**
- Not sure yet: **5 points**

### Timeline (Max 25 points)
- ASAP (Within 2 weeks): **25 points**
- Soon (1-3 months): **20 points**
- Planning (3-6 months): **15 points**
- Future (6+ months): **10 points**

### Project Type (Max 20 points)
- New Build: **20 points**
- Extension: **20 points**
- Renovation (Major): **18 points**
- Decking & Outdoor: **15 points**
- Landscaping: **12 points**
- Maintenance: **8 points**
- Other: **10 points**

### Location (Max 15 points)
- SW20 (Home base): **15 points**
- SW postcodes: **12 points**
- Other London: **8 points**
- Outside London: **3 points**

### Project Details Quality (Max 10 points)
- Detailed description (100+ words): **10 points**
- Moderate details (50-100 words): **7 points**
- Brief description (under 50 words): **4 points**

---

## Lead Filtering System

### By Budget Range
```
Filter: budget === "over-100k" || budget === "50k-100k"
Result: High-value projects only
```

### By Timeline
```
Filter: timeline === "urgent" || timeline === "soon"
Result: Ready-to-start projects
```

### By Location
```
Filter: postcode.startsWith("SW")
Result: Local leads (faster service, lower costs)
```

### By Project Type
```
Filter: projectType === "new-build" || projectType === "extension"
Result: Major construction projects
```

---

## Form Data Captured

### Essential Contact Info
- ✅ Full Name
- ✅ Email Address
- ✅ Phone Number
- ✅ Postcode (for service area validation)

### Lead Qualification Data
- ✅ Project Type (categorize leads)
- ✅ Budget Range (prioritize by value)
- ✅ Timeline (urgency scoring)
- ✅ Project Details (quality assessment)
- ✅ Referral Source (marketing ROI)

---

## Next Steps After Form Submission

### 1. **Immediate Auto-Response**
Send automated email confirming receipt:
- Thank you message
- Expected response time
- Link to gallery/portfolio

### 2. **Lead Scoring Calculation**
Calculate total points based on matrix above

### 3. **CRM Integration**
Store in spreadsheet or CRM with:
- Lead score
- Priority level (Hot/Warm/Cold)
- Timestamp
- All form data

### 4. **Response Protocol**

**Hot Leads (80-100):**
- Phone call within 2-4 hours
- Same-day site visit if possible
- Priority scheduling

**Warm Leads (50-79):**
- Email response within 4 hours
- Phone call within 24 hours
- Site visit within 48 hours

**Cold Leads (0-49):**
- Email response within 24 hours
- Add to newsletter
- Follow-up in 2 weeks

---

## Sample Lead Scoring Examples

### Example 1: Hot Lead ⭐⭐⭐
```
Name: John Smith
Budget: £50,000 - £100,000 (25 pts)
Timeline: ASAP (25 pts)
Project: Extension (20 pts)
Location: SW20 9ET (15 pts)
Details: Detailed 150-word description (10 pts)

TOTAL: 95 points - HOT LEAD
Action: Call immediately!
```

### Example 2: Warm Lead ⭐⭐
```
Name: Sarah Jones
Budget: £10,000 - £25,000 (15 pts)
Timeline: Planning Stage (15 pts)
Project: Decking (15 pts)
Location: SW18 (12 pts)
Details: Brief description (4 pts)

TOTAL: 61 points - WARM LEAD
Action: Email within 4 hours, call within 24h
```

### Example 3: Cold Lead ⭐
```
Name: Mike Brown
Budget: Not sure yet (5 pts)
Timeline: Future (10 pts)
Project: Maintenance (8 pts)
Location: NW3 (8 pts)
Details: Vague (4 pts)

TOTAL: 35 points - COLD LEAD
Action: Add to nurture campaign
```

---

## Tips for Better Lead Quality

1. **Respond Fast** - First to respond often wins the job
2. **Qualify on Phone** - Ask additional questions to confirm fit
3. **Ask for Budget** - Don't waste time on unqualified leads
4. **Site Visits** - Get in-person for high-value leads
5. **Follow Up** - 80% of sales require 5+ follow-ups

---

## Future Enhancements

### Phase 2
- Email integration (send to Gmail/CRM)
- Google Sheets integration
- SMS notifications for hot leads

### Phase 3
- File upload (plans, photos)
- Calendar booking integration
- Live chat option
- WhatsApp integration

---

**Need help setting up lead scoring?** Review the form submissions in your email and apply the scoring matrix manually, or we can integrate with a CRM system.
