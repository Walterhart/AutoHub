export async function getCars(id) {
    const url = id ? `/api/cars/${id}` : "/api/cars"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch cars",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.cars
}

export async function getHostCars(id) {
    const url = id ? `/api/host/cars/${id}` : "/api/host/cars"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch cars",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.cars
}
