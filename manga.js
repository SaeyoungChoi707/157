AFRAME.registerComponent("tour", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards()
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "aot",
          title: "Shingeki No Kyojin",
          url: "aot.jpg",
        },
        {
          id: "blue_exorcist",
          title: "Ao No Exorcist",
          url: "blue_exorcist.jpg",
        },
  
        {
          id: "dn",
          title: "Death Note",
          url: "dn.jpg",
        },
        {
          id: "drrr",
          title: "Durarara!!!",
          url: "drrr.jpg",
        },
        {
          id: "mdzs",
          title:"Mo Dao Zu Shi",
          url: "mdzs.webp",
        }
      ];

      let previousXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = previousXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        previousXPosition = posX;
  
        const borderEl = this.createBorder(position,item.id)
        const thumbnail = this.thumbNail(item)
        borderEl.appendChild(thumbnail)
        const titlel = this.createTitle(position,item)
        borderEl.appendChild(titlel)
        
        this.placesContainer.appendChild(borderEl);
      }
    },
  
    createBorder: function(position,id){
      const entityel = document.createElement("a-entity")
      entityel.setAttribute("id",id)
      entityel.setAttribute("visible",true)
      entityel.setAttribute("geometry",{
        primitive:"box",
        width:10,
        height:15
      })
      entityel.setAttribute("position",position)
      entityel.setAttribute("material",{color:"#00bcd4",opacity:0.4})
      return entityel
    },
  
    thumbNail: function(item){
      const entityel = document.createElement("a-entity")
      entityel.setAttribute("visible",true)
      entityel.setAttribute("geometry",{
        primitive:"plane",
        width:10,
        height:15
      })
      entityel.setAttribute("material",{src:item.url})
      return entityel
    },
  
    createTitle: function(position,item){
      const entityel = document.createElement("a-entity")
      entityel.setAttribute("text",{
        font:"exo2bold",
        align:"center",
        width:60,
        color:"#e65100",
        value:item.title
      })
      const elposition = position
      elposition.y = -20
      entityel.setAttribute("position",elposition)
      entityel.setAttribute("visible",true)
      return entityel
    }
  });
  