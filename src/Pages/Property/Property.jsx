import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecordsRequest } from "../../ReduxStore/reducer";
import Record from "../../Components/Record/Record";
import Loader from "../Documents/Loader";
import "./Property.css";
const Property = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.records);

  useEffect(() => {
    dispatch(fetchRecordsRequest());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <p className="">Error: {error}</p>;

  return (
    <div className="property-background">
      <div className="property-main">
        <center>
          {" "}
          <h1 className="prop-heading">Properties</h1>
        </center>
        <div className="property-sec">
          {data.length === 0 ? (
            <p className="text-center p-3 w-100">N0 data found</p>
          ) : (
            data.map((record, index) => (
              <>
                <Record obj={record} key={index} />
              </>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Property;
