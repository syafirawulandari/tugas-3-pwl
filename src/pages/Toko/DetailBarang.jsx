import React from "react";
import dataDump from "../../dump/data.dump";
import { useNavigate, useParams } from "react-router-dom";
import { BackButton, BuyButton } from "../../components/Button";
import toast from "react-hot-toast";

const DetailBarang = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = dataDump.filter((item) => item.id === parseInt(id));
  const handleBackButton = () => {
    navigate("/market");
  };
  const handleBuyButton = () => {
    try {
      data.filter((item) => {
        if (item.count > 1) {
          item.count -= 1;
          toast.success("Barang akan segera dikirim :)");
        } else {
          toast.error("Barang habis :(");
        }
      });
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/market");
    }
  };
  return (
    <>
      <main>
        <BackButton actions={handleBackButton} />
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className="container"
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="card"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <figure>
                  <img src={item.images} alt={`gambar${id}.png`} />
                </figure>
                <div>
                  <h1>{item.name}</h1>
                  <div className="card">
                    <div className="heading-item">
                      <p>Harga</p>
                    </div>
                    <p>:</p>
                    <p>
                      Rp.<b>{item.price},00- </b>
                    </p>
                  </div>
                  <div className="card">
                    <div className="heading-item">
                      <p>Tersisa</p>
                    </div>
                    <p>:</p>
                    <p>
                      <b>{item.count}</b>
                    </p>
                  </div>
                  <div className="card">
                    <div className="heading-item">
                      <p>Keterangan</p>
                    </div>
                    <p>:</p>
                    <p>{item.desc}</p>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      textAlign: "right",
                      paddingRight: 20,
                    }}
                  >
                    <BuyButton actions={handleBuyButton} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default DetailBarang;
