import { Router } from 'express';
import CartManager from '../managers/CartManager.js'

const router = Router();

const CartManager = new CartManager();

router.post('/', async (req, res) => {
    const cart = {
        products: []
    };
    const result = await CartManager.save(cart);
    res.send({ status: 'succes', result });
});

router.get('/:id', async (req, res) => {
    const cartId = Number(req.params.id);
    const cart = await CartManager.getById(cartId);
    if (!cart) {
        return res.status(404).send({ error: 'cart not found' });
    }
    res.send({ status: 'succes', cart })
});

export default router;