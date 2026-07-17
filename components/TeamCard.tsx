import Image from 'next/image';

export type TeamMember = {
  name: string;
  designation: string;
  note: string;
  photo: string;
};

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="card p-6 hover:border-neutral-300 flex flex-col">
      <div className="flex items-center gap-4 mb-5">
        <Image
          src={member.photo}
          alt={member.name}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover bg-neutral-100 ring-1 ring-neutral-200"
        />
        <div>
          <h3 className="font-semibold leading-tight">{member.name}</h3>
          <p className="text-sm text-blue-600">{member.designation}</p>
        </div>
      </div>
      <p className="text-neutral-600 text-sm leading-relaxed">
        &ldquo;{member.note}&rdquo;
      </p>
    </div>
  );
}
