import Directory from '../../components/category-directory/directory.component.jsx';
import CategoryItem from '../../components/category-item/category-item.component.jsx';

const Home = () => {

  const categories = [
    {
      "id": 1,
      "title": "Fresh Truffles",
      "imageUrl": "https://images.unsplash.com/photo-1597771125516-4eddaf867446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80.png"
    },
    {
      "id": 2,
      "title": "Truffle Products",
      "imageUrl": "https://images.unsplash.com/photo-1638405803234-09ff7f613bdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80.png"
    },
    {
      "id": 3,
      "title": "Fresh Produce",
      "imageUrl": "https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80.png"
    },
    {
      "id": 4,
      "title": "Chef's Ingredients",
      "imageUrl": "https://images.unsplash.com/photo-1601001815853-3835274403b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80.png"
    },
    {
      "id": 5,
      "title": "Market Produce",
      "imageUrl": "https://images.unsplash.com/photo-1543083477-4f785aeafaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80.png"
    }
  ]

  return (
  <Directory categories={categories} CategoryItem={CategoryItem}/>
  );
};

export default Home; 