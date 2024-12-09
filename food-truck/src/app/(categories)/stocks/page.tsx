"use client";

import { useState } from "react";
import listProduits from "./listProduits.json";

interface StockItem {
  id: number;
  produit: string;
  categorie: string;
  stock: number;
  conseille: number;
  perdue: number;
  stockAnnuel: number;
}

const lists: StockItem[] = listProduits.lists;

const Stocks = () => {
  // État pour stocker la catégorie sélectionnée
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Obtenir toutes les catégories uniques
  const categories = ["all", ...new Set(lists.map((item) => item.categorie))];

  // Filtrer les items selon la catégorie sélectionnée
  const filteredItems =
    selectedCategory === "all"
      ? lists
      : lists.filter((item) => item.categorie === selectedCategory);

  return (
    <div>
      <h1>Stocks</h1>

      <table className="border-separate border-spacing-2 border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-600">Produits</th>
            <th className="border border-slate-600">
              {/* Menu déroulant des catégories */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-transparent"
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category === "all" ? "Toutes les catégories" : category}
                  </option>
                ))}
              </select>
            </th>
            <th className="border border-slate-600">Quantité en stock</th>
            <th className="border border-slate-600">Quantité conseillée</th>
            <th className="border border-slate-600">Pertes</th>
            <th className="border border-slate-600">Stock annuel</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item, index) => (
            <tr key={index}>
              <td className="border border-slate-700">{item.produit}</td>
              <td className="border border-slate-700">{item.categorie}</td>
              <td className="border border-slate-700">{item.stock}</td>
              <td className="border border-slate-700">{item.conseille}</td>
              <td className="border border-slate-700">{item.perdue}</td>
              <td className="border border-slate-700">{item.stockAnnuel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Stocks;
