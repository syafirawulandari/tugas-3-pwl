import React from "react";
import dataDump from "../../dump/data.dump";
import { BuyButton, DetailsButton } from "../../components/Button";
import { useNavigate } from "react-router-dom";

const DaftarBarang = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="container toko">
        {dataDump?.map((item, index) => {
          return (
            <div key={index} className="content card">
              <figure>
                <img src={item.images} alt={`gambar${index + 1}.png`} />
              </figure>
              <div className="container">
                <div>
                  <h3>{item.name}</h3>
                  <p>Harga: Rp.{item.price},00- </p>
                  <p>Jumlah: {item.count}</p>
                </div>
                <div className="action-container">
                  <DetailsButton
                    actions={() => {
                      navigate(`${item.id}`);
                    }}
                  />
                  <BuyButton />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default DaftarBarang;
