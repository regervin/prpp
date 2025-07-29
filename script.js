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

// Prompt Library Functions
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

Include suggested visuals and targeting recommendations. Keep copy concise and action-oriented.`
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
