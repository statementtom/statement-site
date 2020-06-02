import React, { useState, useEffect, useRef } from "react";
import { Field, Control, Select, Column } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import { useMedia } from "react-use";

import { LongRightArrow } from "../Icons";
import encode from "../../../util/encode";

import { RECAPTCHA_KEY } from "./constants";

import * as S from "./styles";

export const ContactForm = () => {
  const mobile = useMedia("(max-width: 768px)");
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [project, setProject] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [honeyPot, setHoneyPot] = useState("");
  const [recaptcha, setRecaptcha] = useState("");
  const [recaptchaMessage, setRecaptchaMessage] = useState("");

  const recaptchaRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    if (recaptcha === "") {
      setRecaptchaMessage("Please confirm you're not a robot.");
      return;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        name,
        company,
        email,
        telephone,
        project,
        service,
        budget,
        message,
        "g-recaptcha-response": recaptcha
      })
    })
      .then(() => {
        setSuccess(true);
        setName("");
        setEmail("");
        setCompany("");
        setTelephone("");
        setProject("");
        setService("");
        setBudget("");
        setMessage("");
        setRecaptchaMessage("");
        window.dataLayer.push({
          event: "contact-form-submit"
        });
      })
      .catch(() => setSuccess(false));
  };

  return (
    <>
      {!mobile && success && (
        <S.Notification>
          Thank you for getting in touch, we will get back to you soon!
        </S.Notification>
      )}
      <S.Form
        name="contact"
        method="post"
        onSubmit={handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
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
            <S.Input
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
            <S.Input
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
            <S.Input
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
            <S.Input
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
            <S.Select fullwidth>
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
            </S.Select>
          </Column>
          <Column
            mobile={{ size: 12 }}
            tablet={{ size: 6 }}
            desktop={{ size: 6 }}
          >
            <S.Select fullwidth>
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
            </S.Select>
          </Column>
          <Column
            mobile={{ size: 12 }}
            tablet={{ size: 12 }}
            desktop={{ size: 12 }}
          >
            <S.Input
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
            <S.Textarea
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
            <S.FormHelper>* Required fields</S.FormHelper>
          </Column>
        </ColumnGroup>
        <Field>
          <Control>
            <S.Recaptcha
              ref={recaptchaRef}
              sitekey={RECAPTCHA_KEY}
              onChange={value => setRecaptcha(value)}
            />
          </Control>
        </Field>
        <Field>
          <Control style={{ textAlign: "right" }}>
            {recaptchaMessage !== "" && (
              <S.InlineNotification>{recaptchaMessage}</S.InlineNotification>
            )}
            <S.Button type="submit">
              Submit <LongRightArrow size="20" fill="#fff" />
            </S.Button>
          </Control>
        </Field>
      </S.Form>
      {mobile && success && (
        <S.Notification>
          Thank you for getting in touch, we will get back to you soon!
        </S.Notification>
      )}
    </>
  );
};
