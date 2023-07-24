import { createServer, Model, Response  } from "miragejs";

createServer({
  models: {
    cars: Model,
    users: Model
  },

  seeds(server) {
    server.create("car", {
        id: "1",
        hostId: "1",
        brand: "toyota",
        price: 25000,
        description:
          "The Toyota Camry is a mid-size sedan known for its reliability and fuel efficiency. It offers a comfortable ride and is equipped with advance safety features.",
        model: "camry",
        imageUrl:
          "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
        type: "sedan",
      });
      
    server.create("car", {
        id: "2",
        hostId: "2",
        brand: "ford",
        price: 40000,
        description:
          "The Ford Mustang is a legendary sports car known for its powerful performance and iconic design. It delivers thrilling acceleration and offers a thrilling driving experience.",
        model: "mustang",
        imageUrl:
          "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
        type: "sports car",
      });
 
    server.create("car", {
        id: "3",
        hostId: "3",
        brand: "tesla",
        price: 50000,
        description:
          "The Tesla Model 3 is an all-electric sedan known for its cutting-edge technology and impressive range. It offers a smooth and quiet ride while being environmentally friendly.",
        model: "model 3",
        imageUrl:
          "https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3132&q=80",
        type: "electric car",
      });
      // fake user
      server.create("user", { id: "123", email: "w@w.com", password: "p1", name: "The Red Prince" })
},
routes() {
  this.namespace = "api"
  this.logging = false
  // this.timing = 2000
  this.passthrough("https://firestore.googleapis.com/**")
  
  this.get("/cars", (schema, request) => {
      // return new Response(400, {}, {error: "Error fetching data"})
      return schema.cars.all()
  })

  this.get("/cars/:id", (schema, request) => {
      const id = request.params.id
      return schema.cars.find(id)
  })

  this.get("/host/cars", (schema, request) => {
      
      return schema.cars.where({ hostId: "1" })
  })

  this.get("/host/cars/:id", (schema, request) => {
     
      const id = request.params.id
      return schema.cars.findBy({ id, hostId: "1" })
  })

  // This is a fake authentication. Obviously would not do in real world because of password would be encrypted
  // and would not send password back to client
  this.post("/login", (schema, request) => {
    const { email, password } = JSON.parse(request.requestBody)

    const foundUser = schema.users.findBy({ email, password })
    if (!foundUser) {
        return new Response(401, {}, { message: "No user with those credentials found!" })
    }

    foundUser.password = undefined
    return {
        user: foundUser,
        token: "Fake token"
    }
})
}
})
