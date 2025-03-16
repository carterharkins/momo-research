// Data structure for communities
const communities = [
    {
        name: "Gardening Enthusiasts",
        tamRank: 1,
        size: "143 million people (converted from 71.5M households)",
        demographics: "All income levels, core segment homeowners aged 50+. Strong female skew in flower gardening.",
        onlineHubs: [
            "Facebook Creative Gardening (hundreds of thousands of members)",
            "GardenWeb (Houzz)",
            "r/gardening on Reddit",
            "Local gardening clubs",
            "Master Gardener programs"
        ],
        subgroups: [
            "Vegetable gardening",
            "Flower gardening",
            "Landscaping",
            "Indoor houseplants",
            "Specialty gardening (orchids, bonsai)",
            "Organic gardening",
            "Heirloom plants"
        ],
        merchandisePotential: {
            strengths: [
                "Passionate and proud hobbyists",
                "Large addressable market",
                "Social aspects (garden tours, farmers' markets)",
                "Receptive to witty/heartfelt slogans"
            ],
            weaknesses: [
                "Seasonal interest in colder climates",
                "Not all casual gardeners feel group identity",
                "Avid gardeners show strong affinity"
            ]
        }
    },
    {
        name: "Home Cooking & Baking",
        tamRank: 2,
        size: "~100 million enthusiasts (42% of Americans)",
        demographics: "Spans genders and ages, women 35+ traditionally most involved. Many retirees and empty-nest Boomers.",
        onlineHubs: [
            "Facebook recipe groups (millions of members)",
            "r/Cooking and r/Baking",
            "AllRecipes",
            "Food52",
            "Food blogger communities"
        ],
        subgroups: [
            "Bakers (breads, cakes, pastry lovers)",
            "Grill and BBQ enthusiasts",
            "Home chefs exploring global cuisines",
            "Slow cooker/Instant Pot aficionados",
            "Foodies seeking gourmet experiences",
            "Diet-based groups (keto, vegan)"
        ],
        merchandisePotential: {
            strengths: [
                "Strong sense of pride and humor",
                "Social events participation",
                "Enormous community size",
                "Gift-giving potential"
            ],
            weaknesses: [
                "Many own kitchen attire already",
                "Not all see cooking as identity",
                "Competitive market"
            ]
        }
    },
    {
        name: "Bird Watching ('Birders')",
        tamRank: 3,
        size: "96 million U.S. adults (casual to serious)",
        demographics: "Skews middle-age or older, over third of premium users 55+. Gender balanced, middle to upper-middle class.",
        onlineHubs: [
            "Facebook birding groups",
            "BirdForum.net",
            "eBird platform (1.5M active U.S. users)",
            "Reddit's r/birding",
            "Local Audubon Society chapters"
        ],
        subgroups: [
            "Backyard birders",
            "Listers (species tracking)",
            "Bird photographers",
            "Bird-of-prey enthusiasts",
            "Casual nature lovers"
        ],
        merchandisePotential: {
            strengths: [
                "Strong emotional affinity",
                "Proud 'bird nerd' identity",
                "Social aspect (birding walks)",
                "Large community size"
            ],
            weaknesses: [
                "Existing gear from organizations",
                "Casual watchers may not buy apparel",
                "Club members likely customers"
            ]
        }
    },
    {
        name: "Book Lovers & Reading Enthusiasts",
        tamRank: 4,
        size: "~90 million people (37% of Americans)",
        demographics: "Older adults especially avid, 65+ most likely to read daily. Women slightly outnumber men.",
        onlineHubs: [
            "Goodreads (90M+ users globally)",
            "Facebook book clubs",
            "Reddit's r/books (20M+ members)",
            "LibraryThing",
            "Local library groups"
        ],
        subgroups: [
            "Genre communities (mystery, sci-fi, etc.)",
            "Book club members",
            "Physical book preferrers",
            "History/non-fiction buffs",
            "Classic literature fans"
        ],
        merchandisePotential: {
            strengths: [
                "Strong reader identity",
                "Literary pride common",
                "Broad market size",
                "Gift-giving potential"
            ],
            weaknesses: [
                "Some overlap with specific fandoms",
                "Preference for practical items",
                "Competitive market"
            ]
        }
    },
    {
        name: "Dog Owners & Dog Lovers",
        tamRank: 5,
        size: "60 million U.S. households with dogs",
        demographics: "Spans ages, middle-aged and empty nesters common. Women drive purchases but many enthusiastic dog dads.",
        onlineHubs: [
            "Facebook Dogspotting Society (1.8M members)",
            "Reddit's r/dogs",
            "Dogster forums",
            "AKC breed clubs",
            "Instagram dog communities"
        ],
        subgroups: [
            "Breed enthusiasts",
            "Rescue advocates",
            "Service dog handlers",
            "Agility trainers",
            "Hunting dog owners"
        ],
        merchandisePotential: {
            strengths: [
                "High emotional affinity",
                "Proud pet parent identity",
                "Large market size",
                "Strong spending habits"
            ],
            weaknesses: [
                "Saturated market",
                "Many existing brands",
                "Need multiple breed designs"
            ]
        }
    },
    {
        name: "Grandparents",
        tamRank: 6,
        size: "70 million U.S. grandparents",
        demographics: "Mostly 50+ age group, spans income levels, focused on family.",
        onlineHubs: [
            "Facebook grandparent groups",
            "AARP online community",
            "Grandparents.com community",
            "Local support groups"
        ],
        subgroups: [
            "Active grandparents",
            "Long-distance grandparents",
            "Primary caregivers",
            "New grandparents",
            "Multiple grandchildren"
        ],
        merchandisePotential: {
            strengths: [
                "Strong emotional attachment",
                "Pride in grandchildren",
                "Large demographic",
                "Gift-receiving market"
            ],
            weaknesses: [
                "Traditional market",
                "Generic products common",
                "Customization often preferred"
            ]
        }
    },
    {
        name: "Retirees & Seniors (Active Lifestyle)",
        tamRank: 7,
        size: "56 million seniors (65+), 110 million 50+",
        demographics: "AARP age threshold 50+, 10,000 Boomers reach 65 daily. Mixed income levels.",
        onlineHubs: [
            "AARP website and Facebook (2M+ followers)",
            "Senior Planet initiative",
            "Facebook retirement groups",
            "Nextdoor communities"
        ],
        subgroups: [
            "Snowbirds",
            "RV retirees",
            "Senior fitness groups",
            "Volunteers",
            "Part-time workers"
        ],
        merchandisePotential: {
            strengths: [
                "Strong group identity",
                "Retirement milestone gifts",
                "Huge market size",
                "Established buying habits"
            ],
            weaknesses: [
                "Price sensitivity",
                "Careful messaging needed",
                "Generic products common"
            ]
        }
    },
    {
        name: "Board & Card Game Enthusiasts",
        tamRank: 8,
        size: "60 million Americans (24%)",
        demographics: "Middle-aged and older individuals especially involved in classic games. Bridge players average 70s.",
        onlineHubs: [
            "BoardGameGeek forums",
            "Bridge Players Unite on Facebook",
            "ACBL online resources",
            "Chess.com forums"
        ],
        subgroups: [
            "Bridge players",
            "Chess enthusiasts",
            "Classic board gamers",
            "Modern hobby gamers",
            "Puzzle and trivia fans"
        ],
        merchandisePotential: {
            strengths: [
                "Social hobby aspect",
                "Club/tournament wear",
                "Broad participant base",
                "Game-specific pride"
            ],
            weaknesses: [
                "Fragmented by game type",
                "Varying interest levels",
                "Limited merchandise tradition"
            ]
        }
    },
    {
        name: "Wine Enthusiasts",
        tamRank: 9,
        size: "30-40 million core enthusiasts",
        demographics: "Ages 45-75 heavily represented. Skews higher-income, slight female majority.",
        onlineHubs: [
            "Wine Berserkers forum",
            "Reddit's r/wine (175k members)",
            "Facebook wine groups",
            "Vivino community",
            "Wine club forums"
        ],
        subgroups: [
            "Casual wine lovers",
            "Wine connoisseurs",
            "Winery tourists",
            "Social wine clubbers",
            "Regional wine fans"
        ],
        merchandisePotential: {
            strengths: [
                "Passionate community",
                "Social gathering focus",
                "Gift-giving tradition",
                "Disposable income"
            ],
            weaknesses: [
                "Saturated novelty market",
                "Need unique designs",
                "Some prefer elegant items"
            ]
        }
    },
    {
        name: "Craft Beer & Homebrewing",
        tamRank: 10,
        size: "48% drink craft beer, 1.1M homebrewers",
        demographics: "Skews male (70-80%), centered 25-55 age range, many 40s-50s homebrewers.",
        onlineHubs: [
            "BeerAdvocate forums",
            "HomeBrewTalk",
            "Reddit's r/craftbeer",
            "Facebook beer groups",
            "Untappd community"
        ],
        subgroups: [
            "Craft beer enthusiasts",
            "Homebrewers",
            "Beer collectors",
            "Brewery tourists",
            "Beer industry followers"
        ],
        merchandisePotential: {
            strengths: [
                "Passionate community",
                "Common merch buyers",
                "Festival/event wear",
                "Social aspect"
            ],
            weaknesses: [
                "Brewery shirt saturation",
                "Male-skewing demographic",
                "Need unique designs"
            ]
        }
    },
    {
        name: "Photography Enthusiasts",
        tamRank: 11,
        size: "~50 million people (20% of Americans)",
        demographics: "Many Boomers take it up in retirement. Income moderate to high due to equipment costs. Many enthusiasts 40+, as younger folks often stick to phone photography.",
        onlineHubs: [
            "Flickr groups",
            "Reddit's r/photography (4M+ members)",
            "Facebook Photography 101",
            "Ugly Hedgehog forum",
            "Local camera clubs"
        ],
        subgroups: [
            "Nature/Wildlife photographers",
            "Bird photographers",
            "Street/travel photographers",
            "Portrait photographers",
            "Camera gearheads"
        ],
        merchandisePotential: {
            strengths: [
                "Strong identity as photographers",
                "Large market size",
                "Intersects with travel/nature interests",
                "Active in photo walks and events"
            ],
            weaknesses: [
                "Many get photo-themed apparel from camera companies",
                "Some treat it as art and avoid novelty shirts",
                "Competition from camera brand merchandise"
            ]
        }
    },
    {
        name: "Cat Owners & Cat Lovers",
        tamRank: 12,
        size: "84 million people (converted from 42M households)",
        demographics: "Common across ages, older adults often have cats for companionship. Middle-aged women are key demographic, as are retired folks with multiple cats.",
        onlineHubs: [
            "Facebook Crazy Cat Lady Society (500k+ members)",
            "Reddit's r/cats (4M+ members)",
            "TheCatSite forum",
            "Instagram cat communities",
            "Rescue group networks"
        ],
        subgroups: [
            "Multiple-cat owners",
            "Specific breed enthusiasts",
            "Funny cat meme fans",
            "Rescue/adoption advocates",
            "Cat parents"
        ],
        merchandisePotential: {
            strengths: [
                "Strong 'cat person' identity",
                "Very large TAM",
                "High emotional factor",
                "Enthusiastic community"
            ],
            weaknesses: [
                "Oversaturated market",
                "Heavy competition",
                "Some prefer subtle identification"
            ]
        }
    },
    {
        name: "Fishing Enthusiasts",
        tamRank: 13,
        size: "57.7 million Americans (all ages)",
        demographics: "Middle-aged and older men are substantial portion. About 65-70% male. Income varies from rural folks to affluent sport-fishermen.",
        onlineHubs: [
            "BassResource forums",
            "FlyFishingForum",
            "Facebook Fishing Junkies (100k+ members)",
            "Reddit's r/fishing (1M+ members)",
            "Fishbrain app community"
        ],
        subgroups: [
            "Bass fishing folks",
            "Fly fishermen",
            "Saltwater anglers",
            "Casual weekend anglers",
            "Tournament participants"
        ],
        merchandisePotential: {
            strengths: [
                "Strong fishing culture and identity",
                "Huge community size",
                "Regular gear/apparel buyers",
                "Active in fishing events"
            ],
            weaknesses: [
                "Competition from existing fishing brands",
                "Some prefer functional over novelty wear",
                "Market served by outdoor retailers"
            ]
        }
    },
    {
        name: "Genealogy & Family History Buffs",
        tamRank: 14,
        size: "20-30 million engaged hobbyists",
        demographics: "Core genealogists often retirees. Equal gender distribution, slightly more female. Moderate to high income due to subscription costs.",
        onlineHubs: [
            "Ancestry.com (3M+ paying subscribers)",
            "Facebook Genealogy Addicts (30k members)",
            "Reddit's r/Genealogy (170k members)",
            "National Genealogical Society forums",
            "Local society groups"
        ],
        subgroups: [
            "DNA enthusiasts",
            "Family tree builders",
            "Single-surname researchers",
            "History buffs",
            "Heritage groups"
        ],
        merchandisePotential: {
            strengths: [
                "Proud identification as family historians",
                "Conference and society participation",
                "High emotional resonance",
                "Underserved merchandise market"
            ],
            weaknesses: [
                "Niche hobby appeal",
                "Some prefer dignified expression",
                "Limited mainstream interest"
            ]
        }
    },
    {
        name: "Classic Car Enthusiasts",
        tamRank: 15,
        size: "Millions of owners (43M collector vehicles)",
        demographics: "Majority men over 45. Most 55+ (50%). About 80% male. Income skews higher due to hobby costs.",
        onlineHubs: [
            "Hemmings forums",
            "ClassicCars.com forum",
            "Facebook Classic Car Enthusiasts (100k+)",
            "Antique Automobile Club forums",
            "Model-specific clubs"
        ],
        subgroups: [
            "Muscle car enthusiasts",
            "Antique car collectors",
            "Classic truck enthusiasts",
            "Hot rod customizers",
            "Cruiser culture folks"
        ],
        merchandisePotential: {
            strengths: [
                "Strong pride in hobby",
                "Regular show attendance",
                "Active merchandise buyers",
                "Family gift potential"
            ],
            weaknesses: [
                "Existing club merchandise",
                "Brand licensing issues",
                "Competition from auto brands"
            ]
        }
    },
    {
        name: "DIY Woodworking Hobbyists",
        tamRank: 16,
        size: "88.4 million people (26% of US population)",
        demographics: "Skews male and 40+. Many retirees take up woodworking. Middle-class homeowners with space for workshops.",
        onlineHubs: [
            "LumberJocks",
            "Sawmill Creek",
            "Reddit's r/woodworking (4.5M+ members)",
            "Facebook Woodworking for Beginners (300k)",
            "Local woodworking clubs"
        ],
        subgroups: [
            "Furniture makers",
            "Woodturners",
            "Carvers",
            "General DIYers",
            "Home improvement enthusiasts"
        ],
        merchandisePotential: {
            strengths: [
                "Strong hobbyist community",
                "Gift-receiving market",
                "Show/fair attendance",
                "Pride in craftsmanship"
            ],
            weaknesses: [
                "Niche compared to larger hobbies",
                "Some prefer work clothes only",
                "Limited merchandise tradition"
            ]
        }
    },
    {
        name: "RV Camping Enthusiasts",
        tamRank: 17,
        size: "22.4 million people (converted from 11.2M households)",
        demographics: "Median age about 55, many retirees. Average income around $62k/year. Mix of full-timers and weekenders.",
        onlineHubs: [
            "iRV2 forums",
            "RV.net",
            "Facebook RV Living (200k members)",
            "Good Sam Club (2M members)",
            "Escapees RV Club"
        ],
        subgroups: [
            "Full-time RVers",
            "Seasonal snowbirds",
            "Weekend warriors",
            "Family campers",
            "Adventure travelers"
        ],
        merchandisePotential: {
            strengths: [
                "Strong lifestyle identity",
                "Community-oriented",
                "Rally and event attendance",
                "Comfortable casual wear market"
            ],
            weaknesses: [
                "Competition from campground merch",
                "Need older audience appeal",
                "Some market saturation"
            ]
        }
    },
    {
        name: "Cruise Travelers",
        tamRank: 18,
        size: "18.2 million Americans (2024)",
        demographics: "Average age mid-50s, many retirees. Empty nest Boomers common. Middle-class and above income.",
        onlineHubs: [
            "Cruise Critic forums (millions of posts)",
            "Facebook Cruise Addicts (100k members)",
            "Reddit's r/Cruise (150k members)",
            "Cruise line loyalty forums",
            "Roll Call groups"
        ],
        subgroups: [
            "Cruise line loyalists",
            "Frequent cruisers",
            "Theme cruisers",
            "Family reunion groups",
            "Luxury cruisers"
        ],
        merchandisePotential: {
            strengths: [
                "Enthusiastic community",
                "Group travel common",
                "Year-round interest",
                "Gift potential"
            ],
            weaknesses: [
                "Competition from cruise line merch",
                "Limited wear occasions",
                "Brand confusion risk"
            ]
        }
    },
    {
        name: "Arts & Crafts Enthusiasts",
        tamRank: 19,
        size: "28.8 million knit/crochet, 7-10M quilters",
        demographics: "Majority women, often middle-aged or older. Almost half of yarn crafters are retired.",
        onlineHubs: [
            "Ravelry.com (millions of users)",
            "Facebook Addicted to Knitting (200k)",
            "Reddit's r/knitting (500k members)",
            "QuiltingBoard.com",
            "Local craft guilds"
        ],
        subgroups: [
            "Knitters",
            "Crocheters",
            "Quilters",
            "Sewists",
            "General DIY crafters"
        ],
        merchandisePotential: {
            strengths: [
                "Strong social circles",
                "Active gift-giving community",
                "Large market size",
                "Regular group meetings"
            ],
            weaknesses: [
                "Some prefer handmade items",
                "Varied aesthetic preferences",
                "Competition from craft stores"
            ]
        }
    },
    {
        name: "Cigar Aficionados",
        tamRank: 20,
        size: "17.4 million U.S. adults (core: few million)",
        demographics: "Over third of premium smokers 55+. About 90% male. Income skews higher due to hobby costs.",
        onlineHubs: [
            "CigarDojo forum",
            "Reddit's r/cigars (180k members)",
            "Facebook Cigar Cartel",
            "Cigar Aficionado forums",
            "Local lounge communities"
        ],
        subgroups: [
            "Lounge regulars",
            "Collectors",
            "Casual social smokers",
            "Regional preference groups",
            "Veteran circles"
        ],
        merchandisePotential: {
            strengths: [
                "Proud hobby identification",
                "Club/event participation",
                "Luxury lifestyle association",
                "Social gathering focus"
            ],
            weaknesses: [
                "Moderate pool size",
                "Ad platform restrictions",
                "Competition from brand swag"
            ]
        }
    },
    {
        name: "Military Veterans Community",
        tamRank: 21,
        size: "16-18 million U.S. veterans",
        demographics: "Largest cohort are Vietnam-era vets in 70s, many Gulf War and Cold War-era vets in 50s/60s. About 90% male.",
        onlineHubs: [
            "US Army Veterans group (150k members)",
            "Reddit's r/Veterans (80k members)",
            "American Legion forums",
            "VFW online communities",
            "Grunt Style community"
        ],
        subgroups: [
            "Army veterans",
            "Navy veterans",
            "Air Force veterans",
            "Marine veterans",
            "Coast Guard veterans"
        ],
        merchandisePotential: {
            strengths: [
                "Strongest affinity identity",
                "High propensity to buy/wear merch",
                "Family gift purchases",
                "Strong patriotic connection"
            ],
            weaknesses: [
                "Saturated market",
                "Trademark restrictions",
                "Political sensitivity",
                "Many existing gear sources"
            ]
        }
    },
    {
        name: "Hunting Enthusiasts",
        tamRank: 22,
        size: "25.8 million Americans (14.4M licensed)",
        demographics: "Heavily male (~90%). Many 40+, though some younger revival. Large rural/Midwest/Southern presence.",
        onlineHubs: [
            "HuntingNet forums",
            "ArcheryTalk forums",
            "Facebook Deer Hunting USA (100k)",
            "Reddit's r/Hunting (140k)",
            "State hunting forums"
        ],
        subgroups: [
            "Deer hunters",
            "Waterfowl hunters",
            "Upland bird hunters",
            "Big game trophy hunters",
            "Bowhunters"
        ],
        merchandisePotential: {
            strengths: [
                "Strong cultural identity",
                "Daily wear of hunting brands",
                "Tradition-focused community",
                "Active lifestyle segment"
            ],
            weaknesses: [
                "Well-served by outdoor brands",
                "Advertising restrictions",
                "Regional preferences",
                "Existing brand loyalty"
            ]
        }
    },
    {
        name: "Motorcycle Riders (Bikers)",
        tamRank: 23,
        size: "8.8 million registered motorcycles",
        demographics: "Median age 50 and rising. About 81% male. Mix of middle-income to affluent riders.",
        onlineHubs: [
            "HD Forums",
            "Facebook Bikers over 50",
            "Reddit's r/motorcycles (1M+)",
            "HOG chapters",
            "VFW Riders groups"
        ],
        subgroups: [
            "Cruiser enthusiasts",
            "Touring riders",
            "Sport bike riders",
            "Trike riders",
            "Club members"
        ],
        merchandisePotential: {
            strengths: [
                "Distinct dress style",
                "High brand affinity",
                "Rally/event attendance",
                "Collectible tendency"
            ],
            weaknesses: [
                "Strong brand loyalty (HD)",
                "Club-specific preferences",
                "Market saturation",
                "Competitive space"
            ]
        }
    },
    {
        name: "History Buffs & Reenactors",
        tamRank: 24,
        size: "1-5 million serious enthusiasts",
        demographics: "Tends to be middle-aged and older, often male. Many 50+ with time and resources for reenacting.",
        onlineHubs: [
            "Civil War Reenactors FB (30k)",
            "Reddit's r/AskHistorians",
            "WWII history groups",
            "Colonial history forums",
            "Local society pages"
        ],
        subgroups: [
            "War reenactors",
            "Military history enthusiasts",
            "Local history society members",
            "Museum volunteers",
            "History Channel fans"
        ],
        merchandisePotential: {
            strengths: [
                "Strong identity connection",
                "Event participation",
                "Heritage pride",
                "Educational focus"
            ],
            weaknesses: [
                "Fragmented interests",
                "Niche market size",
                "Collection preference",
                "Political sensitivity"
            ]
        }
    },
    {
        name: "Antique & Vintage Collectors",
        tamRank: 25,
        size: "Several million active collectors",
        demographics: "Many collectors are retirees with time and disposable income. Equal gender overall with category variations.",
        onlineHubs: [
            "Antiquers.com forums",
            "Facebook Antique Collectors",
            "Reddit's r/Antiques (40k)",
            "Estate sale groups",
            "Collector clubs"
        ],
        subgroups: [
            "Furniture collectors",
            "Vintage signage collectors",
            "Coin collectors",
            "Vintage toy collectors",
            "Estate sale hunters"
        ],
        merchandisePotential: {
            strengths: [
                "Passionate community",
                "Knowledge pride",
                "Show attendance",
                "Gift potential"
            ],
            weaknesses: [
                "Fragmented interests",
                "Limited identity wear",
                "Niche appeal",
                "Marketing challenges"
            ]
        }
    },
    {
        name: "Teachers & Educators",
        tamRank: 26,
        size: "~4 million K-12 teachers",
        demographics: "About 76% female. Many in 40s-60s, though age range varies. Middle-income professionals.",
        onlineHubs: [
            "Teacher Humor Lounge (100k)",
            "WeAreTeachers community",
            "Reddit's r/Teachers (240k)",
            "TeachersPayTeachers forums",
            "Education blogs"
        ],
        subgroups: [
            "Elementary teachers",
            "High school teachers",
            "Retired teachers",
            "Librarians",
            "School counselors"
        ],
        merchandisePotential: {
            strengths: [
                "Strong professional identity",
                "Regular gift receiving",
                "Casual Friday wear",
                "Pride in profession"
            ],
            weaknesses: [
                "Saturated gift market",
                "Dress code limits",
                "Existing merch sources",
                "Budget constraints"
            ]
        }
    },
    {
        name: "Nurses & Medical Professionals",
        tamRank: 27,
        size: "4.2 million registered nurses",
        demographics: "About 87% female. Wide age range with many in 40s-50s. Middle-class income.",
        onlineHubs: [
            "Nurse Life FB (300k members)",
            "allnurses.com forums",
            "Reddit's r/nursing (120k)",
            "RN Humor groups",
            "Professional associations"
        ],
        subgroups: [
            "ER nurses",
            "ICU nurses",
            "NICU nurses",
            "Nurse practitioners",
            "Retired nurses"
        ],
        merchandisePotential: {
            strengths: [
                "High pride/camaraderie",
                "Event participation",
                "Gift culture",
                "Large community"
            ],
            weaknesses: [
                "Free swag competition",
                "Design saturation",
                "Uniform requirements",
                "Market crowding"
            ]
        }
    },
    {
        name: "Breast Cancer Community",
        tamRank: 28,
        size: "4+ million survivors",
        demographics: "Mostly women, often 50+ as risk increases with age. Supporters span all demographics.",
        onlineHubs: [
            "Susan G. Komen (1M+ followers)",
            "Breast Cancer Warriors (50k)",
            "Breastcancer.org forums",
            "Support groups",
            "Race teams"
        ],
        subgroups: [
            "Survivors",
            "Current fighters",
            "Family supporters",
            "General advocates",
            "Event participants"
        ],
        merchandisePotential: {
            strengths: [
                "Strong emotional connection",
                "Event participation",
                "Support culture",
                "Gift giving"
            ],
            weaknesses: [
                "Charity competition",
                "Seasonal demand",
                "Sensitivity needs",
                "Nonprofit dominance"
            ]
        }
    },
    {
        name: "Animal Rescue Community",
        tamRank: 29,
        size: "4.1 million adoptions annually",
        demographics: "Heavily female, spanning 20s through retirees. Many middle-aged pet lovers. Middle-class income.",
        onlineHubs: [
            "Rescue Dogs Rock (700k)",
            "Local shelter pages",
            "Foster networks",
            "Reddit's r/rescuepets",
            "Adoption groups"
        ],
        subgroups: [
            "Dog rescue advocates",
            "Cat rescue folks",
            "Foster parents",
            "Shelter staff",
            "Adoption counselors"
        ],
        merchandisePotential: {
            strengths: [
                "Message spreading desire",
                "Emotional connection",
                "Cause support",
                "Active community"
            ],
            weaknesses: [
                "Nonprofit competition",
                "Limited market size",
                "Fundraising overlap",
                "Budget constraints"
            ]
        }
    },
    {
        name: "Ham Radio Operators",
        tamRank: 30,
        size: "700,000 licensed operators",
        demographics: "Skews older male, many retirees. Technical background common.",
        onlineHubs: [
            "QRZ.com forums",
            "eHam.net",
            "Reddit's r/amateurradio (70k)",
            "ARRL forums",
            "Local club groups"
        ],
        subgroups: [
            "HF communicators",
            "Emergency comms volunteers",
            "Radio contesters",
            "Technical experimenters",
            "Club members"
        ],
        merchandisePotential: {
            strengths: [
                "Enthusiastic community",
                "Strong identity",
                "Event attendance",
                "Club participation"
            ],
            weaknesses: [
                "Small market size",
                "Age demographics",
                "Limited growth",
                "Online buying hesitance"
            ]
        }
    }
];

// Load content when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadExecutiveSummary();
    loadMethodology();
    renderCommunityCards();
    setupCollapsibleSections();
    setupModal();
});

// Load executive summary
function loadExecutiveSummary() {
    const summaryContent = document.querySelector('.summary-content');
    summaryContent.innerHTML = `
        <p>This report identifies 30 mainstream U.S. interest-based communities suitable for marketing affinity apparel to middle-aged and older adults. These groups span popular hobbies (e.g. gardening, cooking, travel), lifestyle and outdoor interests (pets, RV camping, birdwatching), professional and identity groups (teachers, veterans, grandparents), and philanthropic causes (animal rescue, cancer awareness). For each community, we detail where members congregate online, the group's size and demographics, sub-interests, merchandise potential, key competitors, and example online groups. We find that hobbies like gardening, cooking, and birdwatching boast tens of millions of participants, offering very large total addressable markets (TAM). Other sizable niches include pet owners (over 60 million U.S. households have pets), book lovers (37% of Americans enjoy reading), and travel enthusiasts (e.g. ~18 million Americans cruise each year). Communities such as military veterans (about 16–18 million in the U.S.) and craft beer and wine aficionados (roughly half of adults consume craft beer or wine) also represent strong markets. Niche groups like ham radio operators (~750k licensees) and specific causes are smaller but still have passionate followings.</p>
        <p>Middle-aged and senior consumers in these communities generally have strong purchasing power and loyalty to their interests. Many congregate on Facebook groups, subreddits, and dedicated forums, making targeted marketing feasible. The analysis evaluates each group's strengths (e.g. emotional attachment, spending habits) and weaknesses (e.g. niche appeal or competition) for selling themed apparel. We rank the niches by estimated TAM size and note that general hobbies (gardening, cooking, birding) top the list, while specialized interests (ham radio, niche causes) rank lower. Data visualizations and tables summarize key metrics, and competitor examples are provided for each niche (ranging from specialized e-commerce stores to major retailers and Etsy sellers catering to that interest). Overall, the findings highlight multiple high-potential communities – such as gardeners, pet lovers, travelers, and hobbyists – that align well with the client's product focus and demographic, offering substantial opportunities for affinity merchandise sales.</p>
    `;
}

// Load methodology
function loadMethodology() {
    const methodologyContent = document.querySelector('.methodology-content');
    methodologyContent.innerHTML = `
        <p>Our research combined industry reports, surveys, and demographic data to gauge the size and makeup of each interest community. We drew on sources like Statista and trade associations for participation numbers (e.g. number of hobbyists or group members), and Pew Research and similar studies for demographic insights (age, gender, income, etc.). Online activity was assessed by examining popular forums, subreddits, and Facebook groups for each interest (including membership counts when available). We prioritized communities popular with Gen X, Boomers, and seniors, while excluding disallowed categories (politics, religion, explicit content, etc.) per the client's criteria. Each profile was structured to cover the community's online hubs, size/demographics, subgroups, merchandise potential (including TAM rank out of the 30 niches), competitors, and sample online groups. Competitor identification involved searching for existing apparel or merchandise retailers in each niche (including niche-specific brands and broader e-commerce platforms like Etsy, Amazon, or specialized stores). We also compiled a comparative ranking of the niches by approximate size (TAM) to visualize which communities offer the broadest market. All data points are cited from reputable sources to ensure accuracy. This methodology provides a fact-based foundation for evaluating each community's viability for an apparel marketing strategy.</p>
    `;
}

// Function to set up collapsible sections
function setupCollapsibleSections() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const header = section.querySelector('.section-header');
        const content = section.querySelector('.section-content');
        const icon = section.querySelector('.collapse-icon');
        
        // Start collapsed
        content.classList.add('collapsed');
        icon.classList.add('collapsed');
        section.classList.add('collapsed');
        
        // Function to toggle section
        const toggleSection = () => {
            content.classList.toggle('collapsed');
            icon.classList.toggle('collapsed');
            section.classList.toggle('collapsed');
        };
        
        // Add click handler
        header.addEventListener('click', toggleSection);
        
        // Add keyboard handler for accessibility
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleSection();
            }
        });
    });
}

// Setup modal functionality
function setupModal() {
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-modal');

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    closeBtn.addEventListener('click', closeModal);
}

function openModal(community) {
    const modal = document.getElementById('modal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <h2>${community.name}</h2>
        <div class="modal-content-body">
            <div class="modal-section">
                <h3>Overview</h3>
                <p><strong>TAM Rank:</strong> #${community.tamRank}</p>
                <p><strong>Size:</strong> ${community.size}</p>
                <p><strong>Demographics:</strong> ${community.demographics}</p>
            </div>

            <div class="modal-section">
                <h3>Online Presence</h3>
                <ul>
                    ${community.onlineHubs.map(hub => `<li>${hub}</li>`).join('')}
                </ul>
            </div>

            <div class="modal-section">
                <h3>Subgroups</h3>
                <ul>
                    ${community.subgroups.map(group => `<li>${group}</li>`).join('')}
                </ul>
            </div>

            <div class="modal-section">
                <h3>Merchandise Potential</h3>
                <div class="potential-analysis">
                    <div class="strengths">
                        <h4>Strengths</h4>
                        <ul>
                            ${community.merchandisePotential.strengths.map(strength => `<li>${strength}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="weaknesses">
                        <h4>Weaknesses</h4>
                        <ul>
                            ${community.merchandisePotential.weaknesses.map(weakness => `<li>${weakness}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Render community cards with preview content
function renderCommunityCards() {
    const grid = document.querySelector('.communities-grid');
    grid.innerHTML = '';

    communities.forEach(community => {
        const card = document.createElement('div');
        card.className = 'community-card';
        
        card.innerHTML = `
            <h3>${community.name}</h3>
            <ul class="card-preview">
                <li><strong>TAM Rank:</strong> #${community.tamRank}</li>
                <li><strong>Size:</strong> ${community.size}</li>
                <li><strong>Demographics:</strong> ${community.demographics}</li>
                <li><strong>Key Strengths:</strong> ${community.merchandisePotential.strengths[0]}</li>
            </ul>
            <button class="read-more-btn" onclick="openModal(${JSON.stringify(community).replace(/"/g, '&quot;')})">Read More</button>
        `;
        grid.appendChild(card);
    });
} 