import React, { useState } from "react";
import Account, { AccountData } from "../../models/Account";
import { Button, Box, TextInput } from "@primer/react";
import "./AccountForm.css";

const isValidBattletag = (battletag: string) => {
  return battletag && battletag.trim().length > 0;
};

interface Props {
  battletag?: string | null;
  buttonClass?: string;
  onCreate?: () => void;
  _id?: string | null;
  onUpdate: (battletag: string) => void;
  totalAccounts: number;
}

interface DatabaseError {
  errorType: string;
}

const AccountForm = (props: Props) => {
  const [battletag, setBattletag] = useState(props.battletag || "");
  const [isValid, setIsValid] = useState(isValidBattletag(battletag));
  const [error, setError] = useState<string | null>(null);

  const onSaveError = (error: DatabaseError) => {
    let errorMessage = "Something went wrong.";
    if (error.errorType === "uniqueViolated") {
      errorMessage = "That Battletag has already been taken.";
    }
    setError(errorMessage);
  };

  const onSaveSuccess = () => {
    const { onCreate, onUpdate, _id } = props;
    setBattletag("");
    setIsValid(false);
    setError(null);
    if (_id) {
      onUpdate(battletag);
    } else if (typeof onCreate === "function") {
      onCreate();
    }
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid) {
      return;
    }

    const { _id } = props;
    const data: AccountData = { battletag, _id: "" };
    if (_id) {
      data._id = _id;
    }
    const account = new Account(data);

    account.save().then(onSaveSuccess, onSaveError);
  };

  const onBattletagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBattletag(event.target.value);
    setIsValid(isValidBattletag(event.target.value));
    setError(null);
  };

  const { totalAccounts, _id, buttonClass } = props;
  const buttonText = _id ? "Save" : "Add account";
  const battletagDomID = _id ? `account-${_id}-battletag` : "account-battletag";

  return (
    <form onSubmit={onSubmit}>
      <Box display="flex" alignItems="center">
        <Box mr={2}>
          <label htmlFor={battletagDomID}>Battletag:</label>
        </Box>
        <TextInput
          id={battletagDomID}
          type="text"
          value={battletag}
          required
          onChange={onBattletagChange}
          placeholder="ASampleAccount#1234"
          autoFocus={totalAccounts < 1}
        />
        <Button type="submit" disabled={!isValid} ml={2}>
          {buttonText}
        </Button>
      </Box>
      {error && <div className="error battletag-error">{error}</div>}
    </form>
  );
};

export default AccountForm;
