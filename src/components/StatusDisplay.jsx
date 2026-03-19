import Card from "./Card";
import Badge from "./Badge";
import Group from "/src/ui/Group";
import Paragraph from "/src/ui/Paragraph";
import HeaderText from "/src/ui/HeaderText";

export default function StatusDisplay({ statusData }) {
    return (
        <Group classname={"grid grid-cols-2 lg:grid-cols-4 gap-4 medium:gap-6"}>
            {statusData.map((stats, index) => (
                <Card
                  key={index}
                  status={true}
                  classname={"hover:shadow-lg flex items-center justify-between"}
                >
                    <Badge type="primary" status={true}>
                        <stats.icon className={"icons"} />
                    </Badge>
                    <Group classname={"text-right"}>
                        <HeaderText type="status">{stats.data}</HeaderText>
                        <Paragraph
                            type="xs"
                            classname={"text-nowrap secondary-text-color"}
                        >
                            {stats.text}
                        </Paragraph>
                    </Group>
                </Card>
            ))}
        </Group>
    );
}