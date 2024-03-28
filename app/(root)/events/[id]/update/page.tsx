import EventForm from "@/components/shared/EventForm";
import { getEventById } from "@/lib/actions/event.actions";
import { auth } from "@clerk/nextjs";

type UpdateEventProps = {
  params: {
    id: string;
  };
};

const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {
  const { userId: clerkUserId } = auth();

  const event = await getEventById(id);

  return (
    <>
      <section className="py-5 bg-center bg-cover bg-primary-50 bg-dotted-pattern md:py-10">
        <h3 className="text-center wrapper h3-bold sm:text-left">
          Update Event
        </h3>
      </section>

      <div className="my-8 wrapper">
        <EventForm userId={clerkUserId as string} type="Update" event={event} />
      </div>
    </>
  );
};

export default UpdateEvent;
