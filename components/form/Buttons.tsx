"use client";

import { SignInButton } from "@clerk/nextjs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Pen, Trash2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { ReloadIcon } from "@radix-ui/react-icons";

type btnSize = "default" | "lg" | "sm";

type ButtonProps = {
  text: string;
  size?: btnSize;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export function Button({
  text,
  size = "default",
  type = "button",
  onClick,
  disabled,
  className = "",
}: ButtonProps) {
  const sizeClasses = {
    default: "px-4 py-2",
    lg: "px-6 py-3",
    sm: "px-2 py-1",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-primary text-white rounded hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50 ${sizeClasses[size]} ${className}`}
    >
      {text}
    </button>
  );
}

export function SubmitButton({
  text,
  size = "default",
  disabled,
  className = "",
}: Omit<ButtonProps, "type" | "onClick">) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      text={pending ? "Please wait..." : text}
      size={size}
      disabled={disabled || pending}
      className={className}
    />
  );
}

export function DeleteButton({
  text,
  onClick,
  size = "default",
  disabled,
  className = "",
}: Omit<ButtonProps, "type">) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center gap-x-2 text-rose-500 hover:text-rose-600 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      <Trash2 className="w-4 h-4" />
      {text}
    </button>
  );
}

export function EditButton({
  text,
  onClick,
  size = "default",
  disabled,
  className = "",
}: Omit<ButtonProps, "type">) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center gap-x-2 text-primary hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      <Pen className="w-4 h-4" />
      {text}
    </button>
  );
}

export function FavoriteButton({
  propertyId,
  favoriteId,
  pathname,
}: {
  propertyId: string;
  favoriteId: string | null;
  pathname: string;
}) {
  const Icon = favoriteId ? FaHeart : FaRegHeart;
  return (
    <button
      type="submit"
      className="hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <Icon className="w-6 h-6 text-rose-500" />
    </button>
  );
}

export function SignInBtn() {
  return (
    <SignInButton mode="modal">
      <Button text="Sign In" />
    </SignInButton>
  );
}

export function CardSignInButton() {
  return (
    <SignInButton mode="modal">
      <button type="button" className="p-2 cursor-pointer hover:opacity-80">
        <FaRegHeart className="w-6 h-6 text-rose-500" />
      </button>
    </SignInButton>
  );
}

export function CardSubmitButton({ isFavorite }: { isFavorite: boolean }) {
  const { pending } = useFormStatus();
  const Icon = isFavorite ? FaHeart : FaRegHeart;
  return (
    <button
      type="submit"
      className="p-2 cursor-pointer hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
      disabled={pending}
    >
      {pending ? (
        <ReloadIcon className="w-6 h-6 animate-spin" />
      ) : (
        <Icon className="w-6 h-6 text-rose-500" />
      )}
    </button>
  );
}

export function IconButton({ actionType }: { actionType: "edit" | "delete" }) {
  const { pending } = useFormStatus();
  const Icon = actionType === "edit" ? Pen : Trash2;
  const colorClass = actionType === "edit" ? "text-primary" : "text-rose-500";

  return (
    <button
      type="submit"
      className={`p-2 cursor-pointer hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50 ${colorClass}`}
      disabled={pending}
    >
      {pending ? (
        <ReloadIcon className="w-4 h-4 animate-spin" />
      ) : (
        <Icon className="w-4 h-4" />
      )}
    </button>
  );
}
