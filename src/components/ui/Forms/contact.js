import React, { useState, useEffect } from 'react';
import { Field, Control, Input, Textarea, Select, Column } from 'rbx';
import styled from '@emotion/styled';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import { useMedia } from 'react-use';
import { LongRightArrow } from '../Icons';

const CustomInput = styled(Input)`
  border-radius: 0;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  box-shadow: none;
  border-color: #ebebeb;
  color: #000;
  transition: all 0.3s ease;

  @media screen and (max-width: 768px) {
    margin: 15px 0;
  }

  &::placeholder {
    transition: all 0.3s ease;
    color: #959595;
  }
  &:hover {
    border-color: #000;
    &::placeholder {
      color: #000;
    }
  }
`;

const CustomTextarea = styled(Textarea)`
  border-radius: 0;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  box-shadow: none;
  border-color: #ebebeb;
  color: #000;
  transition: all 0.3s ease;

  @media screen and (max-width: 768px) {
    margin: 15px 0;
  }

  &::placeholder {
    transition: all 0.3s ease;
    color: #959595;
  }
  &:hover {
    border-color: #000;
    &::placeholder {
      color: #000;
    }
  }
`;

const Form = styled.form`
  margin-top: 60px;
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
  .field {
    margin-bottom: 1rem;
  }
`;

const CustomButton = styled.button`
  text-align: center;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  background-color: #ce0527;
  transition: all 0.3s ease;
  min-width: 300px;
  border: 0;
  cursor: pointer;
  text-transform: lowercase;
  @media screen and (max-width: 768px) {
    min-width: 100%;
  }
  svg {
    display: block;
    margin-left: 10px;
    margin-top: 2px;
    transition: all 0.3s ease;
    path {
      transition: all 0.3s ease;
    }
  }
  &:hover {
    color: #000;
    background-color: #fff;
    svg,
    svg path {
      fill: #ce0527;
    }
  }
`;

const CustomSelect = styled(Select.Container)`
  @media screen and (max-width: 768px) {
    margin: 15px 0;
  }

  select {
    border-radius: 0;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    box-shadow: none;
    border-color: #ebebeb;
  }
`;

const Notification = styled.div`
  padding: 30px;
  background-color: #ce0527;
  color: #fff;
  border: 0;
  text-align: center;
  color: #fff;
  line-height: 28px;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  background-color: #ce0527;
  transition: all 0.3s ease;
  width: 100%;
  margin-bottom: 30px;
`;

const FormHelper = styled.p`
  font-size: 14px;
  color: #000 !important;
`;

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export const ContactForm = () => {
  const mobile = useMedia('(max-width: 768px)');
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [project, setProject] = useState('');
  const [service, setService] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [honeyPot, setHoneyPot] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    console.log(encode({
      'form-name': form.getAttribute('name'),
      'name': name,
      'company': company,
      'email': email,
      'telephone': telephone,
      'project': project,
      'service': service,
      'budget': budget,
      'message': message
    }));

    // fetch('/', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   body: encode({
    //     'form-name': form.getAttribute('name'),
    //     'name': name,
    //     'company': company,
    //     'email': email,
    //     'telephone': telephone,
    //     'project': project,
    //     'service': service,
    //     'budget': budget,
    //     'message': message
    //   }),
    // })
    //   .then(() => {
    //     setSuccess(true);
    //     setName('');
    //     setEmail('');
    //     setCompany('');
    //     setTelephone('');
    //     setProject('');
    //     setService('');
    //     setBudget('');
    //     setMessage('');
    //     window.dataLayer.push({
    //       event: 'contact-form-submit',
    //     });
    //   })
    //   .catch(() => setSuccess(false));
  };

  return (
    <>
      {!mobile && success && (
        <Notification>
          Thank you for getting in touch, we will get back to you soon!
        </Notification>
      )}
      <Form
        name="contact"
        method="post"
        onSubmit={handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <input
            name="bot-field"
            value={honeyPot}
            onChange={e => setHoneyPot(e.target.value)}
          />
        </p>
        <ColumnGroup className="is-mobile is-multiline" paddingless marginless>
          <Column
            mobile={{ size: 12 }}
            tablet={{ size: 6 }}
            desktop={{ size: 16 }}
          >
            <CustomInput
              type="text"
              placeholder="Name *"
              name="name"
              value={name}
              required
              onChange={e => setName(e.target.value)}
            />
          </Column>
          <Column
            mobile={{ size: 12 }}
            tablet={{ size: 6 }}
            desktop={{ size: 6 }}
          >
            <CustomInput
              type="email"
              placeholder="Email *"
              name="email"
              value={email}
              required
              onChange={e => setEmail(e.target.value)}
            />
          </Column>
          <Column
            mobile={{ size: 12 }}
            tablet={{ size: 6 }}
            desktop={{ size: 6 }}
          >
            <CustomInput
              type="text"
              placeholder="Company *"
              name="company"
              value={company}
              required
              onChange={e => setCompany(e.target.value)}
            />
          </Column>
          <Column
            mobile={{ size: 12 }}
            tablet={{ size: 6 }}
            desktop={{ size: 6 }}
          >
            <CustomInput
              type="text"
              placeholder="Telephone *"
              name="telephone"
              value={telephone}
              required
              onChange={e => setTelephone(e.target.value)}
            />
          </Column>
          <Column
            mobile={{ size: 12 }}
            tablet={{ size: 6 }}
            desktop={{ size: 6 }}
          >
            <CustomSelect fullwidth>
              <Select
                name="project"
                value={project}
                required
                onChange={e => setProject(e.target.value)}
              >
                <option value="" defaultValue>
                  Project Start
                </option>
                <Select.Option value="Q1">Q1</Select.Option>
                <Select.Option value="Q2">Q2</Select.Option>
                <Select.Option value="Q3">Q3</Select.Option>
                <Select.Option value="Q4">Q4</Select.Option>
              </Select>
            </CustomSelect>
          </Column>
          <Column
            mobile={{ size: 12 }}
            tablet={{ size: 6 }}
            desktop={{ size: 6 }}
          >
            <CustomSelect fullwidth>
              <Select
                required
                name="service"
                value={service}
                onChange={e => setService(e.target.value)}
              >
                <option value="" defaultValue disabled>
                  Type of Service
                </option>
                <Select.Option value="New Project">New Project</Select.Option>
                <Select.Option value="Replatforming">
                  Replatforming
                </Select.Option>
                <Select.Option value="Optimisation">Optimisation</Select.Option>
                <Select.Option value="Internationalisation">
                  Internationalisation
                </Select.Option>
                <Select.Option value="Other">Other</Select.Option>
              </Select>
            </CustomSelect>
          </Column>
          <Column
            mobile={{ size: 12 }}
            tablet={{ size: 12 }}
            desktop={{ size: 12 }}
          >
            <CustomInput
              type="text"
              name="budget"
              placeholder="Budget Range"
              value={budget}
              onChange={e => setBudget(e.target.value)}
            />
          </Column>
          <Column
            mobile={{ size: 12 }}
            tablet={{ size: 12 }}
            desktop={{ size: 12 }}
          >
            <CustomTextarea
              placeholder="Message *"
              name="message"
              required
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </Column>
          <Column
            mobile={{ size: 12 }}
            tablet={{ size: 12 }}
            desktop={{ size: 12 }}
          >
            <FormHelper>* Required fields</FormHelper>
          </Column>
        </ColumnGroup>
        <Field>
          <Control style={{ textAlign: 'right' }}>
            <CustomButton type="submit">
              Submit <LongRightArrow size="20" fill="#fff" />
            </CustomButton>
          </Control>
        </Field>
      </Form>
      {mobile && success && (
        <Notification>
          Thank you for getting in touch, we will get back to you soon!
        </Notification>
      )}
    </>
  );
};
