// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Generate Review Function
function generateReview() {
    const productUrl = document.getElementById('productUrl').value;
    if (!productUrl.trim()) {
        alert('Please enter a product URL first');
        return;
    }

    // Show loading state
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Generating...';
    button.disabled = true;

    // Simulate API call
    setTimeout(() => {
        const reviewContent = `# Comprehensive Product Review: Premium Wireless Headphones

## Overall Rating: ⭐⭐⭐⭐⭐ (4.8/5)

### What I Loved About These Headphones

After testing these Premium Wireless Headphones for over two weeks, I can confidently say they've exceeded my expectations in almost every category. Here's my honest, detailed review.

### **Sound Quality: Exceptional (5/5)**

The audio quality is simply outstanding. The 40mm drivers deliver crisp highs, rich mids, and deep, punchy bass that doesn't overpower the other frequencies. Whether I'm listening to classical music, podcasts, or bass-heavy electronic tracks, every detail comes through crystal clear.

**Key Sound Features:**
- Hi-Res Audio certification
- Custom-tuned 40mm drivers  
- Wide soundstage that creates an immersive experience
- Excellent instrument separation

### **Noise Cancellation: Industry-Leading (5/5)**

The active noise cancellation (ANC) is where these headphones truly shine. I tested them in various environments:

- **Coffee shops**: Completely blocked out chatter and background noise
- **Airplane**: Made a 6-hour flight peaceful and quiet
- **Busy streets**: Traffic noise virtually disappeared
- **Home office**: Perfect for focused work sessions

The ANC doesn't create that "pressure" feeling that some competitors do, making them comfortable for extended use.

### **Comfort & Build Quality: Outstanding (4.5/5)**

**Comfort:**
- Memory foam ear cushions that don't cause fatigue
- Adjustable headband fits various head sizes
- Lightweight design (only 250g)
- Can wear for 4+ hours without discomfort

**Build Quality:**
- Premium aluminum frame feels solid and durable
- Genuine leather ear cups age beautifully
- Sturdy hinges that fold flat for travel
- Comes with a premium carrying case

### **Battery Life: Exceptional (5/5)**

The 30-hour battery life claim is accurate. In my testing:
- **With ANC on**: 28-30 hours of playback
- **ANC off**: 35+ hours of playback
- **Quick charge**: 15 minutes = 3 hours of playback
- **Full charge time**: 2 hours via USB-C

This means you can use them for an entire work week without charging.

### **Connectivity & Features: Excellent (4.5/5)**

**Bluetooth Performance:**
- Bluetooth 5.0 with excellent range (30+ feet)
- Connects instantly to paired devices
- Stable connection with no dropouts
- Can connect to two devices simultaneously

**Smart Features:**
- Touch controls are responsive and intuitive
- Auto-pause when removed from ears
- Voice assistant integration (Siri, Google Assistant)
- Companion app for EQ customization

### **Value for Money: Great (4/5)**

At $299, these headphones compete directly with Sony WH-1000XM4 and Bose QuietComfort 45. Here's how they stack up:

**Pros vs Competitors:**
- Better battery life than most competitors
- Superior build quality and materials
- More comfortable for long sessions
- Excellent customer support

**Cons:**
- Slightly more expensive than some alternatives
- No wireless charging case
- App could use more features

### **Who Should Buy These?**

**Perfect for:**
- Frequent travelers who need excellent ANC
- Audiophiles who want premium sound quality
- Remote workers needing focus
- Anyone who values comfort and build quality

**Maybe not for:**
- Budget-conscious buyers (under $200)
- Those who prefer on-ear vs over-ear
- Users who need waterproofing for workouts

### **Final Verdict**

These Premium Wireless Headphones deliver on their promises. The combination of exceptional sound quality, industry-leading noise cancellation, and premium build quality justifies the $299 price point.

**Bottom Line:** If you're looking for headphones that excel in every category and will last for years, these are an excellent investment. The 30-hour battery life alone makes them worth considering.

**My Rating: 4.8/5 stars**

**Recommendation:** Highly recommended for anyone serious about audio quality and comfort.

---

*Disclaimer: I purchased these headphones with my own money and this review reflects my honest experience after two weeks of daily use.*`;

        document.getElementById('reviewContent').innerHTML = reviewContent.replace(/\n/g, '<br>');
        document.getElementById('reviewOutput').classList.remove('hidden');
        
        // Reset button
        button.innerHTML = originalText;
        button.disabled = false;
    }, 2000);
}

// Copy Review Function
function copyReview() {
    const reviewContent = document.getElementById('reviewContent').innerText;
    navigator.clipboard.writeText(reviewContent).then(() => {
        alert('Review copied to clipboard!');
    });
}

// Copy Email Sequence Function
function copyEmailSequence() {
    const emailContent = document.getElementById('emailSequenceContent').innerText;
    navigator.clipboard.writeText(emailContent).then(() => {
        alert('Email sequence copied to clipboard!');
    });
}

// Bonus Product Generator
const bonusProducts = [
    {
        title: "Email Marketing Mastery Course",
        value: "$497",
        description: "Complete email marketing course with templates, sequences, and automation strategies",
        prompt: `Create a comprehensive email marketing course that complements [MAIN PRODUCT]. Include:

MODULE 1: Email List Building Fundamentals
- Lead magnet creation strategies
- Opt-in form optimization
- Landing page best practices
- Traffic generation for list building

MODULE 2: Email Sequence Mastery  
- Welcome sequence templates
- Nurture campaign strategies
- Sales sequence frameworks
- Re-engagement campaigns

MODULE 3: Advanced Email Marketing
- Segmentation strategies
- Personalization techniques
- A/B testing methodologies
- Analytics and optimization

MODULE 4: Automation & Workflows
- Drip campaign setup
- Behavioral triggers
- Customer journey mapping
- Advanced automation strategies

BONUS MATERIALS:
- 50+ email templates
- Subject line swipe file
- Email design templates
- Campaign planning worksheets

This course should position perfectly as a bonus for [MAIN PRODUCT] customers who want to maximize their marketing results.`
    },
    {
        title: "Social Media Content Calendar",
        value: "$297",
        description: "12-month content calendar with posts, hashtags, and engagement strategies",
        prompt: `Design a complete 12-month social media content calendar for [MAIN PRODUCT] users:

CALENDAR STRUCTURE:
- 365 days of content ideas
- Platform-specific adaptations (Instagram, Facebook, Twitter, LinkedIn, TikTok)
- Seasonal and holiday tie-ins
- Product promotion integration

CONTENT TYPES INCLUDED:
- Educational posts (40%)
- Behind-the-scenes content (20%)
- User-generated content ideas (15%)
- Product showcases (15%)
- Inspirational/motivational posts (10%)

MONTHLY THEMES:
January: New Year, Fresh Starts
February: Love & Relationships
March: Spring Renewal
April: Growth & Progress
May: Celebration & Achievement
June: Summer Preparation
July: Freedom & Independence
August: Back-to-School Energy
September: Autumn Transformation
October: Halloween & Spooky Fun
November: Gratitude & Thanksgiving
December: Holidays & Year-End Reflection

BONUS FEATURES:
- Hashtag research for each post
- Optimal posting times by platform
- Engagement strategies
- Content creation templates
- Analytics tracking sheets

Perfect complement to [MAIN PRODUCT] for users wanting consistent social media presence.`
    },
    {
        title: "Conversion Optimization Toolkit",
        value: "$397",
        description: "Complete toolkit for optimizing sales pages, landing pages, and conversion funnels",
        prompt: `Create a comprehensive conversion optimization toolkit for [MAIN PRODUCT] users:

TOOLKIT COMPONENTS:

1. LANDING PAGE OPTIMIZER
- 25+ high-converting landing page templates
- A/B testing frameworks
- Headline formulas that convert
- Call-to-action optimization guide

2. SALES PAGE BLUEPRINT
- Psychology-driven sales page structure
- Objection handling frameworks
- Social proof integration strategies
- Urgency and scarcity techniques

3. FUNNEL ANALYSIS TOOLS
- Conversion tracking templates
- Funnel performance calculators
- Customer journey mapping tools
- Revenue optimization strategies

4. COPYWRITING RESOURCES
- Power word libraries
- Emotional trigger frameworks
- Benefit-focused writing templates
- Testimonial collection systems

5. DESIGN ELEMENTS
- High-converting button designs
- Trust badge collections
- Progress indicator templates
- Mobile optimization checklists

BONUS MATERIALS:
- Video tutorials for each tool
- Case study examples
- Implementation checklists
- ROI calculation templates

This toolkit perfectly complements [MAIN PRODUCT] by helping users maximize their conversion rates and revenue.`
    },
    {
        title: "AI Prompt Library Pro",
        value: "$197",
        description: "1000+ AI prompts for marketing, content creation, and business growth",
        prompt: `Develop a comprehensive AI prompt library for [MAIN PRODUCT] users:

PROMPT CATEGORIES:

1. CONTENT CREATION (200+ prompts)
- Blog post ideas and outlines
- Social media content
- Video script templates
- Podcast episode structures

2. MARKETING COPY (200+ prompts)
- Sales page copy
- Email marketing
- Ad copy creation
- Product descriptions

3. BUSINESS STRATEGY (150+ prompts)
- Market research
- Competitor analysis
- Business planning
- Growth strategies

4. CUSTOMER ENGAGEMENT (150+ prompts)
- Customer service responses
- Community building
- Feedback collection
- Relationship nurturing

5. PRODUCTIVITY & AUTOMATION (150+ prompts)
- Workflow optimization
- Task automation
- Time management
- Process improvement

6. CREATIVE BRAINSTORMING (150+ prompts)
- Innovation techniques
- Problem-solving frameworks
- Idea generation
- Creative thinking

ORGANIZATION FEATURES:
- Searchable database
- Category filtering
- Favorite prompts system
- Custom prompt creation templates

BONUS CONTENT:
- AI tool recommendations
- Prompt optimization guide
- Best practices documentation
- Video training series

Perfect addition to [MAIN PRODUCT] for users wanting to leverage AI across their entire business.`
    },
    {
        title: "Traffic Generation Masterclass",
        value: "$697",
        description: "Complete training on driving targeted traffic to your offers and content",
        prompt: `Create a comprehensive traffic generation masterclass for [MAIN PRODUCT] users:

MASTERCLASS MODULES:

MODULE 1: ORGANIC TRAFFIC FOUNDATIONS
- SEO fundamentals and keyword research
- Content marketing strategies
- Blog traffic optimization
- Long-tail keyword targeting

MODULE 2: SOCIAL MEDIA TRAFFIC
- Platform-specific strategies
- Viral content creation
- Community building techniques
- Influencer collaboration methods

MODULE 3: PAID ADVERTISING MASTERY
- Facebook/Instagram ads
- Google Ads optimization
- YouTube advertising
- LinkedIn marketing

MODULE 4: EMAIL TRAFFIC GENERATION
- List building strategies
- Newsletter optimization
- Cross-promotion techniques
- Referral systems

MODULE 5: PARTNERSHIP TRAFFIC
- Joint venture strategies
- Guest posting systems
- Podcast appearances
- Collaboration frameworks

MODULE 6: ADVANCED TRAFFIC TACTICS
- Retargeting campaigns
- Lookalike audiences
- Traffic arbitrage
- Conversion optimization

BONUS MATERIALS:
- Traffic tracking templates
- Campaign planning worksheets
- Budget allocation guides
- ROI calculation tools
- Case study examples

This masterclass perfectly complements [MAIN PRODUCT] by ensuring users can drive quality traffic to their content and offers.`
    }
];

function generateBonusProducts() {
    const productUrl = document.getElementById('bonusProductUrl').value;
    if (!productUrl.trim()) {
        alert('Please enter a product URL or name first');
        return;
    }

    // Show loading state
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Generating...';
    button.disabled = true;

    // Simulate API call
    setTimeout(() => {
        // Select 3 random bonus products
        const shuffled = [...bonusProducts].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);
        
        // Generate HTML for bonus products
        let bonusHtml = '';
        selected.forEach((bonus, index) => {
            const prompt = bonus.prompt.replace(/\[MAIN PRODUCT\]/g, productUrl);
            bonusHtml += `
                <div class="bg-gray-50 rounded-lg p-6 border">
                    <div class="flex items-start justify-between mb-4">
                        <div>
                            <h3 class="text-xl font-bold text-gray-900 mb-1">${bonus.title}</h3>
                            <p class="text-green-600 font-semibold text-lg mb-2">Value: ${bonus.value}</p>
                            <p class="text-gray-600">${bonus.description}</p>
                        </div>
                        <button onclick="copyBonusPrompt(${index})" class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2 shrink-0">
                            <i class="fas fa-copy"></i>
                            Copy Prompt
                        </button>
                    </div>
                    
                    <div class="bg-white rounded-lg p-4 border">
                        <h4 class="font-semibold text-gray-900 mb-2">Creation Prompt:</h4>
                        <div class="max-h-32 overflow-y-auto">
                            <pre class="whitespace-pre-wrap text-sm text-gray-700 font-mono" id="bonusPrompt${index}">${prompt}</pre>
                        </div>
                    </div>
                </div>
            `;
        });

        document.getElementById('bonusProductsList').innerHTML = bonusHtml;
        document.getElementById('bonusGeneratorInput').classList.add('hidden');
        document.getElementById('bonusGeneratorOutput').classList.remove('hidden');
        
        // Reset button
        button.innerHTML = originalText;
        button.disabled = false;
    }, 2000);
}

function copyBonusPrompt(index) {
    const promptContent = document.getElementById(`bonusPrompt${index}`).innerText;
    navigator.clipboard.writeText(promptContent).then(() => {
        alert('Bonus prompt copied to clipboard!');
    });
}

function resetBonusGenerator() {
    document.getElementById('bonusGeneratorInput').classList.remove('hidden');
    document.getElementById('bonusGeneratorOutput').classList.add('hidden');
    document.getElementById('bonusProductUrl').value = '';
}

// Prompt Library Functions - EXPANDED WITH LEAD MAGNETS
const prompts = {
    'blog-post': `Write a comprehensive blog post about [TOPIC]. Structure it with:

1. Attention-grabbing headline
2. Compelling introduction that hooks the reader
3. 5-7 main points with subheadings
4. Real examples and case studies
5. Actionable tips readers can implement
6. Strong conclusion with call-to-action

Make it SEO-optimized with relevant keywords and ensure it provides genuine value to readers. Target length: 1500-2000 words.`,

    'social-media': `Create 10 engaging social media posts about [TOPIC] for [PLATFORM]. Include:

- Mix of educational, entertaining, and promotional content
- Platform-appropriate hashtags
- Call-to-action for engagement
- Visual content suggestions
- Optimal posting times
- Engagement strategies

Make each post unique and valuable to your audience while maintaining brand consistency.`,

    'video-script': `Write a compelling video script for [VIDEO TOPIC] that is [DURATION] long. Include:

HOOK (First 15 seconds):
- Attention-grabbing opening
- Clear value proposition
- Reason to keep watching

MAIN CONTENT:
- 3-5 key points
- Stories and examples
- Visual cues and transitions
- Engagement elements

CALL-TO-ACTION:
- Clear next step
- Compelling reason to act
- Multiple ways to engage

Format with timestamps and visual directions.`,

    'sales-page': `Create high-converting sales page copy for [PRODUCT/SERVICE]. Structure:

HEADLINE: Benefit-driven and attention-grabbing
SUBHEADLINE: Clarifies the main benefit
PROBLEM: Identify customer pain points
SOLUTION: Present your product as the answer
BENEFITS: List key benefits (not features)
SOCIAL PROOF: Testimonials and case studies
OBJECTION HANDLING: Address common concerns
GUARANTEE: Risk reversal offer
CALL-TO-ACTION: Clear and compelling
URGENCY: Scarcity or time-sensitive elements

Use persuasive copywriting techniques and psychological triggers.`,

    'email-marketing': `Create a 5-email welcome sequence for [BUSINESS/PRODUCT]:

EMAIL 1: Welcome & Set Expectations
- Warm welcome message
- What they can expect
- First valuable tip/resource

EMAIL 2: Your Story/Origin
- Personal background
- Why you started
- Build connection and trust

EMAIL 3: Valuable Content/Training
- Actionable tips
- Free resource
- Demonstrate expertise

EMAIL 4: Social Proof & Case Studies
- Success stories
- Testimonials
- Build credibility

EMAIL 5: Soft Pitch & Next Steps
- Introduce paid offering
- Clear value proposition
- Strong call-to-action

Each email should be 200-300 words with engaging subject lines.`,

    'ad-copy': `Write compelling ad copy for [PRODUCT/SERVICE] targeting [AUDIENCE]:

HEADLINE: Attention-grabbing and benefit-focused
BODY TEXT: 
- Hook with pain point or desire
- Present solution
- Key benefits (2-3 maximum)
- Social proof element
- Clear call-to-action

Create 3 variations:
1. Problem-focused approach
2. Benefit-focused approach  
3. Social proof-focused approach

Include suggested visuals and targeting recommendations. Keep copy concise and action-oriented.`,

    // NEW LEAD MAGNET PROMPTS
    'ebook-lead-magnet': `Create a comprehensive eBook lead magnet for [NICHE/TOPIC]. Structure:

TITLE: "The Ultimate Guide to [TOPIC]: [SPECIFIC BENEFIT]"

OUTLINE:
Chapter 1: Introduction & Problem Overview
- Define the main problem your audience faces
- Statistics and research to support the problem
- Promise of what they'll learn

Chapter 2: Foundation Knowledge
- Essential concepts they need to understand
- Common myths and misconceptions
- Framework or methodology overview

Chapter 3: Step-by-Step Solution
- Detailed action steps (5-7 steps)
- Real examples and case studies
- Common mistakes to avoid

Chapter 4: Advanced Strategies
- Pro tips and insider secrets
- Tools and resources recommendations
- Optimization techniques

Chapter 5: Implementation & Next Steps
- Action plan template
- Success metrics to track
- How to get continued support

BONUS SECTIONS:
- Quick reference checklist
- Resource links and tools
- FAQ section

TARGET: 15-25 pages, highly actionable content that positions you as the expert while solving a specific problem.`,

    'checklist-lead-magnet': `Create a comprehensive checklist lead magnet for [PROCESS/GOAL]. Format:

TITLE: "The Complete [PROCESS] Checklist: Never Miss a Critical Step Again"

INTRODUCTION:
- Why this checklist is essential
- How to use it effectively
- What results to expect

MAIN CHECKLIST SECTIONS:

PRE-[PROCESS] PREPARATION:
□ [Step 1 with brief explanation]
□ [Step 2 with brief explanation]
□ [Step 3 with brief explanation]
□ [Continue with 5-7 preparation steps]

DURING [PROCESS]:
□ [Action step 1]
□ [Action step 2]
□ [Action step 3]
□ [Continue with 8-12 action steps]

POST-[PROCESS] OPTIMIZATION:
□ [Follow-up step 1]
□ [Follow-up step 2]
□ [Follow-up step 3]
□ [Continue with 3-5 optimization steps]

BONUS SECTION:
□ Pro tips for advanced users
□ Common pitfalls to avoid
□ Resources and tools needed

Make each item actionable with clear success criteria. Include space for notes and completion dates.`,

    'template-lead-magnet': `Create a valuable template lead magnet for [SPECIFIC USE CASE]. Include:

TITLE: "[SPECIFIC OUTCOME] Template: Copy, Customize & Get Results"

TEMPLATE COMPONENTS:

1. MAIN TEMPLATE:
- Pre-filled sections with placeholder text
- Clear instructions for customization
- Professional formatting and design
- Multiple format options (Word, PDF, Google Doc)

2. INSTRUCTION GUIDE:
- Step-by-step customization process
- Best practices for each section
- Examples of successful implementations
- Common mistakes to avoid

3. BONUS VARIATIONS:
- 3 different template styles/approaches
- Industry-specific adaptations
- Beginner vs. advanced versions

4. RESOURCE SECTION:
- Related tools and software
- Additional templates that complement this one
- Links to helpful articles and guides

CUSTOMIZATION AREAS:
- [Specific field 1] with guidance
- [Specific field 2] with examples
- [Specific field 3] with best practices
- [Continue with 5-8 customizable sections]

Ensure the template saves significant time while delivering professional results.`,

    'video-series-lead-magnet': `Create a multi-part video training series lead magnet for [TOPIC]. Structure:

SERIES TITLE: "[SPECIFIC OUTCOME] Video Masterclass: [TIME FRAME] to [RESULT]"

VIDEO 1: Foundation & Mindset (8-10 minutes)
- Welcome and series overview
- Common misconceptions about [TOPIC]
- Success mindset and expectations
- What they'll achieve by the end

VIDEO 2: Strategy & Planning (10-12 minutes)
- Core strategy framework
- Planning template walkthrough
- Goal setting and metrics
- Action step assignment

VIDEO 3: Implementation Tactics (12-15 minutes)
- Step-by-step implementation
- Live demonstration or case study
- Tools and resources needed
- Troubleshooting common issues

VIDEO 4: Optimization & Scaling (10-12 minutes)
- How to improve results
- Advanced techniques
- Scaling strategies
- Measuring success

VIDEO 5: Next Steps & Resources (8-10 minutes)
- Recap of key learnings
- Implementation timeline
- Additional resources
- How to get continued support

BONUS MATERIALS:
- PDF workbook with exercises
- Template downloads
- Resource links document
- Private Facebook group access

Each video should be highly actionable with clear takeaways and next steps.`,

    'quiz-lead-magnet': `Create an engaging quiz lead magnet for [NICHE/TOPIC]. Structure:

QUIZ TITLE: "What's Your [SPECIFIC AREA] Style? Discover Your Personalized Path to [DESIRED OUTCOME]"

QUIZ STRUCTURE:

INTRODUCTION:
- Hook: Why this quiz matters
- What they'll discover
- How long it takes (2-3 minutes)
- Privacy assurance

QUESTIONS (8-12 questions):

Question 1: [Situation-based question]
A) [Option A - represents personality type 1]
B) [Option B - represents personality type 2]
C) [Option C - represents personality type 3]
D) [Option D - represents personality type 4]

[Continue with 7-11 more questions covering different aspects]

RESULT TYPES (4 distinct personalities):

TYPE 1: "The [Personality Name]"
- Description of this type
- Strengths and challenges
- Personalized recommendations
- Specific action steps
- Recommended resources

TYPE 2: "The [Personality Name]"
[Same structure as Type 1]

TYPE 3: "The [Personality Name]"
[Same structure as Type 1]

TYPE 4: "The [Personality Name]"
[Same structure as Type 1]

FOLLOW-UP SEQUENCE:
- Immediate result delivery
- Detailed PDF report
- Personalized email series (5 emails)
- Product recommendations based on type

Make questions engaging and results highly personalized with specific action steps.`,

    'toolkit-lead-magnet': `Create a comprehensive toolkit lead magnet for [SPECIFIC GOAL/PROCESS]. Include:

TOOLKIT TITLE: "The Complete [GOAL] Toolkit: Everything You Need to [SPECIFIC OUTCOME]"

TOOLKIT COMPONENTS:

1. PLANNING TOOLS:
- Goal setting worksheet
- Project timeline template
- Budget planning spreadsheet
- Resource allocation guide

2. IMPLEMENTATION TOOLS:
- Step-by-step checklists
- Progress tracking sheets
- Quality control templates
- Troubleshooting guide

3. OPTIMIZATION TOOLS:
- Performance metrics dashboard
- A/B testing templates
- Improvement tracking sheets
- ROI calculation tools

4. REFERENCE MATERIALS:
- Quick reference guides
- Best practices cheat sheet
- Common mistakes to avoid
- Industry benchmarks

5. BONUS RESOURCES:
- Recommended tools and software
- Expert interview transcripts
- Case study examples
- Community access information

ORGANIZATION:
- Clear folder structure
- Numbered files for sequence
- Master index document
- Video walkthrough of toolkit

Each tool should be immediately usable and save significant time while improving results.`,

    'swipe-file-lead-magnet': `Create a high-value swipe file lead magnet for [MARKETING/COPY TYPE]. Structure:

SWIPE FILE TITLE: "[NUMBER]+ Proven [COPY TYPE] Templates That Convert Like Crazy"

ORGANIZATION:

SECTION 1: HIGH-CONVERTING HEADLINES (15-20 examples)
- Problem/solution headlines
- Benefit-driven headlines
- Curiosity-gap headlines
- Social proof headlines
- Urgency/scarcity headlines

SECTION 2: OPENING HOOKS (10-15 examples)
- Story-based openings
- Question-based hooks
- Statistic/fact hooks
- Controversial statements
- Personal revelation hooks

SECTION 3: BODY COPY FRAMEWORKS (8-10 templates)
- AIDA framework examples
- PAS (Problem-Agitate-Solution) templates
- Before/After/Bridge structures
- Features to benefits conversions
- Objection handling scripts

SECTION 4: CALL-TO-ACTION TEMPLATES (12-15 examples)
- Urgency-based CTAs
- Benefit-focused CTAs
- Risk-reversal CTAs
- Social proof CTAs
- Curiosity-driven CTAs

SECTION 5: CLOSING TECHNIQUES (8-10 examples)
- Scarcity closers
- Guarantee closers
- Bonus stack closers
- Story-based closers
- Question-based closers

BONUS SECTION:
- Industry-specific adaptations
- A/B testing variations
- Performance notes for each template
- Customization guidelines

Include conversion rates and context for each example where possible.`,

    'resource-guide-lead-magnet': `Create a comprehensive resource guide lead magnet for [NICHE/TOPIC]. Format:

GUIDE TITLE: "The Ultimate [NICHE] Resource Guide: [NUMBER]+ Tools, Tips & Strategies for [SPECIFIC OUTCOME]"

GUIDE STRUCTURE:

INTRODUCTION:
- How to use this guide effectively
- Categories overview
- Rating system explanation
- Update schedule information

SECTION 1: ESSENTIAL TOOLS (10-15 tools)
For each tool include:
- Tool name and website
- What it does (2-3 sentences)
- Best use cases
- Pricing information
- Pros and cons
- Rating (1-5 stars)
- Alternative options

SECTION 2: LEARNING RESOURCES (8-12 resources)
- Books (top 3-5)
- Courses (top 3-5)
- Podcasts (top 3-5)
- YouTube channels (top 3-5)
- Blogs/websites (top 5-8)

SECTION 3: COMMUNITIES & NETWORKING (5-8 communities)
- Facebook groups
- LinkedIn groups
- Discord servers
- Forums
- Local meetups
- Conferences and events

SECTION 4: FREE RESOURCES (10-15 resources)
- Free tools and software
- Free courses and training
- Free templates and downloads
- Free calculators and assessments

SECTION 5: ADVANCED RESOURCES (5-8 resources)
- Premium tools for scaling
- Advanced training programs
- Certification programs
- Done-for-you services

BONUS SECTION:
- Quick start guide
- Resource comparison charts
- Budget-friendly alternatives
- Mobile apps and extensions

Include personal recommendations and why each resource made the list.`
};

function copyPrompt(promptKey) {
    const promptText = prompts[promptKey];
    if (promptText) {
        navigator.clipboard.writeText(promptText).then(() => {
            alert('Prompt copied to clipboard!');
        });
    }
}

// Close modals when clicking outside
document.addEventListener('click', function(event) {
    const modals = ['demoModal', 'emailModal', 'bonusGeneratorModal', 'promptLibraryModal'];
    
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (event.target === modal) {
            closeModal(modalId);
        }
    });
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
});

// Add floating animation to hero elements
document.addEventListener('DOMContentLoaded', function() {
    const floatingElements = document.querySelectorAll('.animate-float');
    
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`;
    });
});
