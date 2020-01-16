import React from "react";
import { Form, Select, Button, Input, Icon } from "antd";
import countryMapperService from "../../service/countryMapperService";
import CountriesAndDirectories from "../../assets/json/countries_and_directories";

const { Option } = Select;
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class SearchForm extends React.Component {
  componentDidMount() {
    // validateFields disable the submit btn on mount
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
      form: { getFieldsValue },
      handleSearchSubmit
    } = this.props;

    const searchObj = getFieldsValue();
    handleSearchSubmit(searchObj);
  };

  render() {
    const { form } = this.props;
    const {
      getFieldError,
      getFieldsError,
      isFieldTouched,
      getFieldDecorator
    } = form;

    const countryError = isFieldTouched("country") && getFieldError("country");
    const nameError = isFieldTouched("name") && getFieldError("name");
    const streetError = isFieldTouched("street") && getFieldError("street");
    const zipError = isFieldTouched("zip") && getFieldError("zip");

    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item
          required
          label="Country"
          validateStatus={countryError ? "error" : ""}
          help={countryError || ""}
        >
          {getFieldDecorator("country", {
            rules: [{ required: true, message: "Please select a country!" }]
          })(
            <Select
              showSearch
              key="country"
              style={{ width: 200 }}
              placeholder="Select a customer"
              onChange={this.handleCustomerChange}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {Object.keys(CountriesAndDirectories).map(country => (
                <Option key={country} value={country}>
                  {countryMapperService.getCountryName(country)}
                </Option>
              ))}
            </Select>
          )}
        </Form.Item>
        <Form.Item
          required
          key="name"
          label="Business Name"
          validateStatus={nameError ? "error" : ""}
          help={nameError || ""}
        >
          {getFieldDecorator("name", {
            rules: [
              { required: true, message: "Please enter a business name!" }
            ]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Business Name"
            />
          )}
        </Form.Item>
        <Form.Item
          required
          key="street"
          label="Street and Street Number"
          validateStatus={streetError ? "error" : ""}
          help={streetError || ""}
        >
          {getFieldDecorator("street", {
            rules: [
              {
                required: true,
                message: "Please enter street and street number!"
              }
            ]
          })(
            <Input
              prefix={<Icon type="home" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Street and Street Number"
            />
          )}
        </Form.Item>
        <Form.Item
          required
          label="ZIP code"
          key="zip"
          validateStatus={zipError ? "error" : ""}
          help={zipError || ""}
        >
          {getFieldDecorator("zip", {
            rules: [
              {
                required: true,
                message: "Please enter zip code!"
              }
            ]
          })(
            <Input
              prefix={<Icon type="code" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="ZIP code"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Search
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: "search_form" })(SearchForm);
