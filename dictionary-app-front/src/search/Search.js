import React, { useState } from "react";
import axios from "axios";
import "antd/dist/antd.min.css";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Typography } from "antd";
const { Search } = Input;
const { Text } = Typography;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "",
    }}
    className="text-[16px] text-[#1890ff]"
    onClick={() => {
      console.log("OK");
    }}
  />
);

export default function SearchPage() {
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);
  const [fullApiSearchInfo, setFullApiSearchInfo] = useState(null);

  const searchOnFullAPI = (word) => {
    setIsLoadingSearch(true);
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((data) => {
        console.log(data);
        setIsLoadingSearch(false);
        setFullApiSearchInfo(data.data[0]);
      })
      .catch((err) => {
        setIsLoadingSearch(false);
        setFullApiSearchInfo(null);
        console.log("err", err);
      });
  };

  const onSearch = (value) => {
    searchOnFullAPI(value.toLowerCase());
  };

  console.log("fullApiSearchInfo", fullApiSearchInfo);
  return (
    <div className="page-content-container">
      <div className="w-[400px] mx-auto">
        <Search
          placeholder="word to search"
          allowClear
          enterButton
          size="default"
          onSearch={onSearch}
          loading={isLoadingSearch}
          suffix={suffix}
        />

        {/* <button className="custom-button btn-13">Search</button> */}
      </div>
      <div>
        {fullApiSearchInfo ? (
          <React.Fragment>
            <Typography.Title level={3}>
              {fullApiSearchInfo.word}
            </Typography.Title>
            <Typography.Title level={4}>
              {fullApiSearchInfo.word}
            </Typography.Title>
            <div className="full-api-search-container">
              {fullApiSearchInfo.meanings.map((wordInfo) => {
                return (
                  <div className=" mb-2">
                    <Text mark>{wordInfo.partOfSpeech}</Text>
                    {wordInfo.definitions.map((meaningsInfo) => {
                      return (
                        <div>
                          <Text>{meaningsInfo.definition}</Text>
                        </div>
                      );
                    })}
                    {/* <Text>{JSON.stringify(wordInfo.definitions)}</Text> */}
                  </div>
                );
              })}
            </div>
          </React.Fragment>
        ) : null}
      </div>
    </div>
  );
}
