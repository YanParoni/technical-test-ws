import React from 'react';

type EditButtonsProps = {
  isEditing: boolean;
  onSave: () => void;
  onCancel: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

const EditButtons: React.FC<EditButtonsProps> = ({
  isEditing,
  onSave,
  onCancel,
  onEdit,
  onDelete,
}: EditButtonsProps) => {
  if (isEditing) {
    return (
      <div className="flex flex-col col-span-1 items-end space-y-2">
        <button
          onClick={onCancel}
          className="bg-gray-500 text-white w-24 px-4 py-2 rounded"
        >
          Cancel
        </button>
        <button
          onClick={onSave}
          type="button"
          className={`bg-green-500 w-24 text-white px-4 py-2 rounded ${
            true ? '' : 'bg-gray-300 cursor-not-allowed'
          }`}
          disabled={!true}
        >
          Save
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col col-span-1 items-end space-y-2">
      <button className="bg-red-500 text-white w-24 px-4 py-2 rounded" onClick={onDelete}>
        Delete
      </button>
      <button className="bg-blue-500 text-white w-24 px-4 py-2 rounded" onClick={onEdit}>
        Editar
      </button>
    </div>
  );
};

export default EditButtons;
