const url = process.env.REACT_APP_PRODUCTS_API_URL;

const productAPIClient = {
    getAllProducts: async function () {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
        }
        const data = await res.json();
        // Handle both formats: direct array or nested in 'products' property
        return Array.isArray(data) ? data : data.products || [];
    },

    insertProduct: async function (p) {
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(p)
        });
        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
        }
        return res.json();
    },

    updateProduct: async function (p) {
        const res = await fetch(`${url}/${p.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(p)
        });
        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
        }
        return res.json();
    },

    deleteProduct: async function (p) {
        const res = await fetch(`${url}/${p.id}`, {
            method: 'DELETE'
        });
        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
        }
        // Handle empty response for DELETE
        const text = await res.text();
        // await new Promise(resolve=>setTimeout(resolve, 5000));
        return text ? JSON.parse(text) : { id: p.id };
    }
};

export default productAPIClient;