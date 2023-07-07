import { createServer, Model } from "miragejs";

createServer({
  models: {
    cars: Model,
  },

  seeds(server) {
    server.create("car", {
        id: "1",
        brand: "Toyota",
        price: 25000,
        description:
          "The Toyota Camry is a mid-size sedan known for its reliability and fuel efficiency. It offers a comfortable ride and is equipped with advanced safety features.",
        model: "Camry",
        imageUrl:
          "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
        type: "sedan",
      });
      
    server.create("car", {
        id: "2",
        brand: "Ford",
        price: 40000,
        description:
          "The Ford Mustang is a legendary sports car known for its powerful performance and iconic design. It delivers thrilling acceleration and offers a thrilling driving experience.",
        model: "Mustang",
        imageUrl:
          "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
        type: "sports car",
      });
 
    server.create("car", {
        id: "3",
        brand: "Tesla",
        price: 50000,
        description:
          "The Tesla Model 3 is an all-electric sedan known for its cutting-edge technology and impressive range. It offers a smooth and quiet ride while being environmentally friendly.",
        model: "Model 3",
        imageUrl:
          "https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3132&q=80",
        type: "electric car",
      });
},

  routes() {
    this.namespace = "api";

    this.get("/cars", (schema, request) => {
      return schema.cars.all();
    });

    this.get("/cars/:id", (schema, request) => {
      const id = request.params.id;
      return schema.cars.find(id);
    });
  },
});
