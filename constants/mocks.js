
const categories = [
    {
      id: "plants",
      name: "Redmi 6",
      tags: ["mobile"],
      count: 147,
      image: require("../images/mobile/redmi_6.jpg")
    },

    {
      id: "seeds",
      name: "Redmi 7",
      tags: ["mobile"],
      count: 16,
      image: require("../images/mobile/redmi_7.png")
    },
    {
      id: "flowers",
      name: "Redmi 7 Pro",
      tags: ["mobile"],
      count: 68,
      image: require("../images/mobile/redmi_7_pro.png")
    },
    {
      id: "sprayers",
      name: "Redmi 8",
      tags: ["mobile"],
      count: 17,
      image: require("../images/mobile/redmi_8.jpg")
    },
    {
      id: "pots",
      name: "Redmi 9",
      tags: ["mobile"],
      count: 47,
      image: require("../images/mobile/redmi_9.jpg")
    },
    {
      id: "fertilizers",
      name: "Redmi A3",
      tags: ["mobile"],
      count: 47,
      image: require("../images/mobile/redmi_a3.jpg")
    },

    {
      id: "headphone1",
      name: "Headphone",
      tags: ["headphone"],
      count: 200,
      image: require("../images/headphone/headphone_2.jpg")
    },

    {
      id: "headphone2",
      name: "Earphone",
      tags: ["headphone"],
      count: 250,
      image: require("../images/headphone/headphone_3.jpg")
    },


    {
      id: "band",
      name: "Band",
      tags: ["other"],
      count: 200,
      image: require("../images/other/band_1.jpg")
    },

    {
      id: "camera",
      name: "Camera",
      tags: ["other"],
      count: 250,
      image: require("../images/other/camera_1.jpg")
    },

    {
      id: "powerbank",
      name: "Power Bank",
      tags: ["other"],
      count: 100,
      image: require("../images/other/powerbank_1.jpg")
    },

    {
      id: "speaker",
      name: "Speakers",
      tags: ["other"],
      count: 300,
      image: require("../images/other/speaker_1.jpg")
    },

    {
      id: "tv",
      name: "TV's",
      tags: ["other"],
      count: 180,
      image: require("../images/other/tv_1.jpg")
    },
  ];
  
  const products = [
    {
      id: 1,
      name: "Redmi Note 8 Pro (Gamma Green, 128 GB) (6 GB RAM)",
      description:
        "Redmi phones feature a curved design with four gracefully rounded corners in a rectangle. When farthest ends of each corner in the rectangle are measured, the screen has a diagonal length of 6.53 inches (actual display area may be slightly smaller). The term Full Screen Display indicates that the phone has a high screen to body ratio in comparison to traditional Xiaomi phones. The screen to body ratio of 91.4% was obtained from Xiaomi laboratory. The result may vary as methods of measurement may vary within the industry.",
      tags: ["Gamma Green", "6 GB RAM", "128 GB"],
      images: [
        require("../images/welcome/welcome_1.jpg"),
        require("../images/welcome/welcome_2.png"),
        require("../images/welcome/welcome_3.png"),
        // showing only 3 images, show +6 for the rest
        require("../images/mobile/redmi_6.jpg"),
    require("../images/mobile/redmi_7.png"),
    require("../images/mobile/redmi_7_pro.png"),
    require("../images/mobile/redmi_8.jpg"),
    require("../images/mobile/redmi_9.jpg"),
    require("../images/mobile/redmi_a3.jpg")
      ]
    }
  ];
  
  const explore = [
    // images
    require("../images/mobile/redmi_6.jpg"),
    require("../images/mobile/redmi_7.png"),
    require("../images/mobile/redmi_7_pro.png"),
    require("../images/mobile/redmi_8.jpg"),
    require("../images/mobile/redmi_9.jpg"),
    require("../images/mobile/redmi_a3.jpg")
  ];
  
  const profile = {
    username: "Dinesh Patidar",
    location: "Indore",
    email: "dinesh@gmail.com",
    avatar: require("../images/profile.jpg"),
    budget: 1000,
    monthly_cap: 5000,
    notifications: true,
    newsletter: false
  };
  
  export { categories, explore, products, profile };